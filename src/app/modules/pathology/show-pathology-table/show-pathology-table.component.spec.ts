import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPathologyTableComponent } from './show-pathology-table.component';

describe('ShowPathologyTableComponent', () => {
  let component: ShowPathologyTableComponent;
  let fixture: ComponentFixture<ShowPathologyTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPathologyTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowPathologyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
