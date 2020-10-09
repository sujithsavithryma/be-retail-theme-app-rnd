import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentCategoryListComponent } from './component-category-list.component';

describe('ComponentCategoryListComponent', () => {
  let component: ComponentCategoryListComponent;
  let fixture: ComponentFixture<ComponentCategoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentCategoryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
