import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDatatableOverviewComponent } from './ngx-datatable-overview.component';

describe('NgxDatatableOverviewComponent', () => {
  let component: NgxDatatableOverviewComponent;
  let fixture: ComponentFixture<NgxDatatableOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxDatatableOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDatatableOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
