import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeCoursesComponent } from './college-courses.component';

describe('CollegeCoursesComponent', () => {
  let component: CollegeCoursesComponent;
  let fixture: ComponentFixture<CollegeCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegeCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
