import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';
import { ChamaSharedModule } from 'app/shared';
/* jhipster-needle-add-admin-module-import - JHipster will add admin modules imports here */

import {
  adminState,
  AuditsComponent,
  LogsComponent,
  ChamaMetricsMonitoringComponent,
  ChamaHealthModalComponent,
  ChamaHealthCheckComponent,
  ChamaConfigurationComponent,
  ChamaDocsComponent,
  ChamaTrackerComponent
} from './';

@NgModule({
  imports: [
    ChamaSharedModule,
    /* jhipster-needle-add-admin-module - JHipster will add admin modules here */
    RouterModule.forChild(adminState)
  ],
  declarations: [
    AuditsComponent,
    LogsComponent,
    ChamaConfigurationComponent,
    ChamaHealthCheckComponent,
    ChamaHealthModalComponent,
    ChamaDocsComponent,
    ChamaTrackerComponent,
    ChamaMetricsMonitoringComponent
  ],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  entryComponents: [ChamaHealthModalComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ChamaAdminModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey !== undefined) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}
