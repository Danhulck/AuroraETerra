import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandValuesComponent } from './brand-values.component';

describe('BrandValuesComponent', () => {
  let component: BrandValuesComponent;
  let fixture: ComponentFixture<BrandValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandValuesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
