import { OnInit, OnDestroy, Directive, NgModuleRef, ViewContainerRef, Injector, NgModuleFactoryLoader, Input, Inject, NgModuleFactory, Type, Output, EventEmitter } from '@angular/core';
import { LAZY_MODULES, LAZY_MODULES_MAP } from './lazy-load-modules.map';

type ModuleWithRoot = Type<any> & { rootComponent: Type<any> };

@Directive({
  selector: '[loadModule]'
})
export class LoadModuleDirective implements OnInit, OnDestroy {

  @Input('loadModule') moduleName: keyof LAZY_MODULES;
  @Input() deferredLoading: boolean;
  @Output() moduleLoaded = new EventEmitter<boolean>();

  private moduleRef: NgModuleRef<any>;

  constructor(
    private vcr: ViewContainerRef,
    private injector: Injector,
    private loader: NgModuleFactoryLoader,
    @Inject(LAZY_MODULES_MAP) private modulesMap
  ) { }

  ngOnInit(): void {
    if (!this.deferredLoading) {
      this.loadModule();
    }
  }

  public loadModule() {
    this.loader
      .load(this.modulesMap[this.moduleName])
      .then((factory: NgModuleFactory<any>) => {
        this.moduleRef = factory.create(this.injector);
        const rootComponent = (factory.moduleType as ModuleWithRoot).rootComponent;
        const componentRef = this.moduleRef.componentFactoryResolver.resolveComponentFactory(rootComponent);
        this.vcr.createComponent(componentRef);
        this.moduleLoaded.emit(true);
      });
  }

  ngOnDestroy(): void {
    this.moduleRef && this.moduleRef.destroy();
  }
}
