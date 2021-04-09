import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {AboutComponent} from './about.component';
import {HttpClientModule} from '@angular/common/http';
import {JobService} from './job.service';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AboutComponent],
      imports: [HttpClientModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not fetch any data if not called asynchronously', () => {
    const jobService = fixture.debugElement.injector.get(JobService);
    spyOn(jobService, 'getJobs')
      .and.returnValue(undefined);
    fixture.detectChanges();
    expect(component.jobs).toBe(undefined);
  });
});
