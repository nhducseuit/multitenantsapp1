import { InjectionToken } from '@angular/core';

export type LAZY_MODULES = {
  liteToolbar: string;
  advancedToolbar: string;
};

export const lazyMap: LAZY_MODULES = {
  liteToolbar: 'src/app/toolbars/lite-toolbar/lite-toolbar.module#LiteToolbarModule',
  advancedToolbar: 'src/app/toolbars/advanced-toolbar/advanced-toolbar.module#AdvancedToolbarModule'
};

export const LAZY_MODULES_MAP = new InjectionToken('LAZY_MODULES_MAP', {
  factory: () => lazyMap
});
