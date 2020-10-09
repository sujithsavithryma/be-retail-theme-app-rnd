import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentCategorySidenavComponent } from './component-category-sidenav.component';

describe('ComponentCategorySidenavComponent', () => {
  let component: ComponentCategorySidenavComponent;
  let fixture: ComponentFixture<ComponentCategorySidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentCategorySidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentCategorySidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
