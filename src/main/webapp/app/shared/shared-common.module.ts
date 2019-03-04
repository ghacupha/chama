import { NgModule } from '@angular/core';

import { ChamaSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [ChamaSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [ChamaSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class ChamaSharedCommonModule {}
