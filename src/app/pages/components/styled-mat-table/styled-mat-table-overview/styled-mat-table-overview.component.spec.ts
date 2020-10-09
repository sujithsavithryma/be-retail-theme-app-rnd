import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyledMatTableOverviewComponent } from './styled-mat-table-overview.component';

describe('StyledMatTableOverviewComponent', () => {
  let component: StyledMatTableOverviewComponent;
  let fixture: ComponentFixture<StyledMatTableOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyledMatTableOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StyledMatTableOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
