import { InjectionToken, NgModuleFactory } from '@angular/core';
import { LiteToolbarModule } from '../toolbars/lite-toolbar/lite-toolbar.module';
import { AdvancedToolbarModule } from '../toolbars/advanced-toolbar/advanced-toolbar.module';

export type LazyLoadedModule<T> = () => Promise<NgModuleFactory<T> | T>;

export interface LazyModules {
  liteToolbar: LazyLoadedModule<NgModuleFactory<LiteToolbarModule> | LiteToolbarModule>;
  advancedToolbar: LazyLoadedModule<NgModuleFactory<LiteToolbarModule> | AdvancedToolbarModule>;
}

// Convert to relative path to be able to work on stackblitz.com
export const lazyMap: LazyModules = {
  liteToolbar: () => import('../toolbars/lite-toolbar/lite-toolbar.module').then(m => m.LiteToolbarModule),
  advancedToolbar: () => import('../toolbars/advanced-toolbar/advanced-toolbar.module').then(m => m.AdvancedToolbarModule)
};

export const LAZY_MODULES_MAP = new InjectionToken('LAZY_MODULES_MAP', {
  factory: () => lazyMap
});
