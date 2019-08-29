import { SpyObject } from './spyobject';
import { ChamaTrackerService } from 'app/core/tracker/tracker.service';

export class MockTrackerService extends SpyObject {
  constructor() {
    super(ChamaTrackerService);
  }

  connect() {}
}
