import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnergyAssetOptionsComponent } from './energy-asset-options.component';
import { CommonModule } from '@angular/common';
import { FilteredEnergyAssetTimeseriesService } from '../../../../services/filteredEnergyAssetTimeseries.service';

describe('EnergyAssetOptionsComponent', () => {
  let component: EnergyAssetOptionsComponent;
  let fixture: ComponentFixture<EnergyAssetOptionsComponent>;
  let filteredEnergyAssetTimeseriesService: FilteredEnergyAssetTimeseriesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnergyAssetOptionsComponent],
      imports: [CommonModule],
      providers: [FilteredEnergyAssetTimeseriesService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergyAssetOptionsComponent);
    component = fixture.componentInstance;
    filteredEnergyAssetTimeseriesService = TestBed.inject(
      FilteredEnergyAssetTimeseriesService
    );
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should set energy asset ID on selectEnergyAsset', () => {
    const mockEvent: unknown = {
      target: { value: '1' } as HTMLSelectElement,
    };

    const setEnergyAssetIdSpy = spyOn(
      filteredEnergyAssetTimeseriesService,
      'setEnergyAssetId'
    );

    component.selectEnergyAsset(mockEvent as Event);

    expect(setEnergyAssetIdSpy).toHaveBeenCalledWith(1);
  });
});
