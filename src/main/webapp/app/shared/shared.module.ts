import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ChamaSharedCommonModule, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [ChamaSharedCommonModule],
  declarations: [HasAnyAuthorityDirective],
  exports: [ChamaSharedCommonModule, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ChamaSharedModule {
  static forRoot() {
    return {
      ngModule: ChamaSharedModule
    };
  }
}
