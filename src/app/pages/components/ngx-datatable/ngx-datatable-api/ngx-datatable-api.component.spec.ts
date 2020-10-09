import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDatatableApiComponent } from './ngx-datatable-api.component';

describe('NgxDatatableApiComponent', () => {
  let component: NgxDatatableApiComponent;
  let fixture: ComponentFixture<NgxDatatableApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxDatatableApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDatatableApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
