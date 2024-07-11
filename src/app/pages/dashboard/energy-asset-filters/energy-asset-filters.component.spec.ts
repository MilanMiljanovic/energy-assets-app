import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyAssetFiltersComponent } from './energy-asset-filters.component';

describe('EnergyAssetFiltersComponent', () => {
  let component: EnergyAssetFiltersComponent;
  let fixture: ComponentFixture<EnergyAssetFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnergyAssetFiltersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EnergyAssetFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
