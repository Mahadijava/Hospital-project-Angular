import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePathologyComponent } from './create-pathology.component';

describe('CreatePathologyComponent', () => {
  let component: CreatePathologyComponent;
  let fixture: ComponentFixture<CreatePathologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePathologyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePathologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
