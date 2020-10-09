import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentCategorySidenavContentComponent } from './component-category-sidenav-content.component';

describe('ComponentCategorySidenavContentComponent', () => {
  let component: ComponentCategorySidenavContentComponent;
  let fixture: ComponentFixture<ComponentCategorySidenavContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentCategorySidenavContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentCategorySidenavContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
