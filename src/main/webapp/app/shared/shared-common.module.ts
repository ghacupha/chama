import { NgModule } from '@angular/core';

import { ChamaSharedLibsModule, FindLanguageFromKeyPipe, ChamaAlertComponent, ChamaAlertErrorComponent } from './';

@NgModule({
  imports: [ChamaSharedLibsModule],
  declarations: [FindLanguageFromKeyPipe, ChamaAlertComponent, ChamaAlertErrorComponent],
  exports: [ChamaSharedLibsModule, FindLanguageFromKeyPipe, ChamaAlertComponent, ChamaAlertErrorComponent]
})
export class ChamaSharedCommonModule {}
