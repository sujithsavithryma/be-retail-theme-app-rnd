import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDatatableExamplesComponent } from './ngx-datatable-examples.component';

describe('NgxDatatableExamplesComponent', () => {
  let component: NgxDatatableExamplesComponent;
  let fixture: ComponentFixture<NgxDatatableExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxDatatableExamplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDatatableExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
