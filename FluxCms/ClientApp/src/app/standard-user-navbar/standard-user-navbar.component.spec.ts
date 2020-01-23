import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardUserNavbarComponent } from './standard-user-navbar.component';

describe('StandardUserNavbarComponent', () => {
  let component: StandardUserNavbarComponent;
  let fixture: ComponentFixture<StandardUserNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardUserNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardUserNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
