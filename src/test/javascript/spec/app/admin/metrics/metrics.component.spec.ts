import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { of, throwError } from 'rxjs';

import { ChamaTestModule } from '../../../test.module';
import { ChamaMetricsMonitoringComponent } from 'app/admin/metrics/metrics.component';
import { ChamaMetricsService } from 'app/admin/metrics/metrics.service';

describe('Component Tests', () => {
  describe('ChamaMetricsMonitoringComponent', () => {
    let comp: ChamaMetricsMonitoringComponent;
    let fixture: ComponentFixture<ChamaMetricsMonitoringComponent>;
    let service: ChamaMetricsService;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [ChamaTestModule],
        declarations: [ChamaMetricsMonitoringComponent]
      })
        .overrideTemplate(ChamaMetricsMonitoringComponent, '')
        .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(ChamaMetricsMonitoringComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(ChamaMetricsService);
    });

    describe('refresh', () => {
      it('should call refresh on init', () => {
        // GIVEN
        const response = {
          timers: {
            service: 'test',
            unrelatedKey: 'test'
          },
          gauges: {
            'jcache.statistics': {
              value: 2
            },
            unrelatedKey: 'test'
          }
        };
        spyOn(service, 'getMetrics').and.returnValue(of(response));

        // WHEN
        comp.ngOnInit();

        // THEN
        expect(service.getMetrics).toHaveBeenCalled();
      });
    });
  });
});
