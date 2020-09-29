import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeThemeComponent } from './be-theme.component';

describe('BeThemeComponent', () => {
  let component: BeThemeComponent;
  let fixture: ComponentFixture<BeThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeThemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
