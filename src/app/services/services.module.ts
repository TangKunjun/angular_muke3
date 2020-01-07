import {ModuleWithProviders, NgModule} from '@angular/core';

@NgModule()
export class ServicesModule {
  static footRoot(): ModuleWithProviders {
    return {
      ngModule: ServicesModule,
      providers: []
    };
  }
}
