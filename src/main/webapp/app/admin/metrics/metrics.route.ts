import { Route } from '@angular/router';

import { ChamaMetricsMonitoringComponent } from './metrics.component';

export const metricsRoute: Route = {
  path: 'chama-metrics',
  component: ChamaMetricsMonitoringComponent,
  data: {
    pageTitle: 'metrics.title'
  }
};
