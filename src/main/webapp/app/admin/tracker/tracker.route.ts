import { Route } from '@angular/router';

import { ChamaTrackerComponent } from './tracker.component';

export const trackerRoute: Route = {
  path: 'chama-tracker',
  component: ChamaTrackerComponent,
  data: {
    pageTitle: 'tracker.title'
  }
};
