import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedJobsComponent } from './related-jobs.component';

describe('RelatedJobsComponent', () => {
  let component: RelatedJobsComponent;
  let fixture: ComponentFixture<RelatedJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatedJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
