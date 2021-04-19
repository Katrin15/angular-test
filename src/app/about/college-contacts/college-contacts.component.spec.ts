import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeContactsComponent } from './college-contacts.component';

describe('CollegeContactsComponent', () => {
  let component: CollegeContactsComponent;
  let fixture: ComponentFixture<CollegeContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegeContactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
