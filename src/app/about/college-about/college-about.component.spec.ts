import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeAboutComponent } from './college-about.component';

describe('CollegeAboutComponent', () => {
  let component: CollegeAboutComponent;
  let fixture: ComponentFixture<CollegeAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegeAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
