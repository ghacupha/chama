import { Route } from '@angular/router';

import { ChamaConfigurationComponent } from './configuration.component';

export const configurationRoute: Route = {
  path: 'chama-configuration',
  component: ChamaConfigurationComponent,
  data: {
    pageTitle: 'configuration.title'
  }
};
