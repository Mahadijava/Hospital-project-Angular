import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPathologyComponent } from './edit-pathology.component';

describe('EditPathologyComponent', () => {
  let component: EditPathologyComponent;
  let fixture: ComponentFixture<EditPathologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPathologyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPathologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
