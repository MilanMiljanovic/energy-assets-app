import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnergyAssetTimeframeOptionsComponent } from './energy-asset-timeframe-options.component';
import { CommonModule } from '@angular/common';
import { FilteredEnergyAssetTimeseriesService } from '../../../../services/filteredEnergyAssetTimeseries.service';

describe('EnergyAssetTimeframeOptionsComponent', () => {
  let component: EnergyAssetTimeframeOptionsComponent;
  let fixture: ComponentFixture<EnergyAssetTimeframeOptionsComponent>;
  let filteredEnergyAssetTimeseriesService: FilteredEnergyAssetTimeseriesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnergyAssetTimeframeOptionsComponent],
      imports: [CommonModule],
      providers: [FilteredEnergyAssetTimeseriesService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergyAssetTimeframeOptionsComponent);
    component = fixture.componentInstance;
    filteredEnergyAssetTimeseriesService = TestBed.inject(
      FilteredEnergyAssetTimeseriesService
    );
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should set energy asset timeframe on selectEnergyAssetTimeframe', () => {
    const mockEvent: unknown = {
      target: { value: '1' } as HTMLSelectElement,
    };

    const setEnergyAssetTimeframeSpy = spyOn(
      filteredEnergyAssetTimeseriesService,
      'setEnergyAssetTimeframe'
    );

    component.selectEnergyAssetTimeframe(mockEvent as Event);

    expect(setEnergyAssetTimeframeSpy).toHaveBeenCalledWith(1);
  });
});
