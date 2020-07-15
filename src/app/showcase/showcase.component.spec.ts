import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ShowcaseComponent} from './showcase.component';
import {ProjectService} from './project.service';
import {HttpClientModule} from '@angular/common/http';

describe('ShowcaseComponent', () => {
  let component: ShowcaseComponent;
  let fixture: ComponentFixture<ShowcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShowcaseComponent],
      imports: [HttpClientModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not fetch any data if not called asynchronously', () => {
    const projectService = fixture.debugElement.injector.get(ProjectService);
    spyOn(projectService, 'getProjects')
      .and.returnValue(undefined);
    fixture.detectChanges();
    expect(component.projects).toBe(undefined);
  });
});
