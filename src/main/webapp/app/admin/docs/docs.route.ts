import { Route } from '@angular/router';

import { ChamaDocsComponent } from './docs.component';

export const docsRoute: Route = {
  path: 'docs',
  component: ChamaDocsComponent,
  data: {
    pageTitle: 'global.menu.admin.apidocs'
  }
};
