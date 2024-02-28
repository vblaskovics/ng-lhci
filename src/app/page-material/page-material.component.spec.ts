import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMaterialComponent } from './page-material.component';

describe('PageMaterialComponent', () => {
  let component: PageMaterialComponent;
  let fixture: ComponentFixture<PageMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageMaterialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
