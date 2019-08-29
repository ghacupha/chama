import { Route } from '@angular/router';

import { ChamaHealthCheckComponent } from './health.component';

export const healthRoute: Route = {
  path: 'chama-health',
  component: ChamaHealthCheckComponent,
  data: {
    pageTitle: 'health.title'
  }
};
