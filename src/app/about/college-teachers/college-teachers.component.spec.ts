import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeTeachersComponent } from './college-teachers.component';

describe('CollegeTeachersComponent', () => {
  let component: CollegeTeachersComponent;
  let fixture: ComponentFixture<CollegeTeachersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegeTeachersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
