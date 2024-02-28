import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageVanillaComponent } from './page-vanilla.component';

describe('PageVanillaComponent', () => {
  let component: PageVanillaComponent;
  let fixture: ComponentFixture<PageVanillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageVanillaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageVanillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
