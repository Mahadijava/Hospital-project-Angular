import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowappointmentComponent } from './showappointment.component';

describe('ShowappointmentComponent', () => {
  let component: ShowappointmentComponent;
  let fixture: ComponentFixture<ShowappointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowappointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowappointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
