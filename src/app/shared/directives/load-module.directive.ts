import {
  OnInit,
  OnDestroy,
  Directive,
  NgModuleRef,
  ViewContainerRef,
  Injector,
  Input,
  Inject,
  NgModuleFactory,
  Type,
  Compiler
} from '@angular/core';
import { LazyModules, LAZY_MODULES_MAP } from '../lazy-load-modules.map';

type ModuleWithRoot = Type<any> & { rootComponent: Type<any> };

@Directive({
  selector: '[loadModule]'
})
export class LoadModuleDirective implements OnInit, OnDestroy {

  @Input('loadModule') moduleName: keyof LazyModules;

  private moduleRef: NgModuleRef<any>;

  constructor(
    private vcr: ViewContainerRef,
    private injector: Injector,
    private compiler: Compiler,
    @Inject(LAZY_MODULES_MAP) private modulesMap
  ) { }

  async ngOnInit() {
    if (this.moduleRef) {
      this.moduleRef.destroy();
    }
    const moduleFactory = await this.loadModuleFactory(this.modulesMap[this.moduleName]);
    if (moduleFactory) {
      // Set lazily loaded module to current Injector
      this.moduleRef = moduleFactory.create(this.injector);

      // Continue creating root component and append it to current ViewContainerRef
      const rootComponent = (moduleFactory.moduleType as ModuleWithRoot).rootComponent;
      const componentFactory = this.moduleRef.componentFactoryResolver.resolveComponentFactory(rootComponent);
      const componentRef = this.vcr.createComponent(componentFactory);
      // Trigger change detection to update view for newly created component
      componentRef.changeDetectorRef.detectChanges();
    }
  }

  public async loadModuleFactory(lazyloadCallback: () => Promise<any>): Promise<NgModuleFactory<any>> {
    const m = await lazyloadCallback();
    if (m instanceof NgModuleFactory) {
      // In case of AOT
      return m;
    } else {
      // In case of JIT
      return this.compiler.compileModuleAsync(m);
    }
  }

  ngOnDestroy(): void {
    if (this.moduleRef) {
      this.moduleRef.destroy();
    }
  }
}
