import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { FilteredEnergyAssetTimeseriesService } from '../../services/filteredEnergyAssetTimeseries.service';
import { HeaderComponent } from './header/header.component';
import { EnergyAssetFiltersComponent } from './energy-asset-filters/energy-asset-filters.component';
import { EnergyAssetTimeseriesLineChartComponent } from './energy-asset-timeseries-line-chart/energy-asset-timeseries-line-chart.component';
import { EnergyAssetTimeseriesTableComponent } from './energy-asset-timeseries-table/energy-asset-timeseries-table.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let filteredEnergyAssetTimeseriesService: FilteredEnergyAssetTimeseriesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        DashboardComponent,
        HeaderComponent,
        EnergyAssetFiltersComponent,
        EnergyAssetTimeseriesLineChartComponent,
        EnergyAssetTimeseriesTableComponent,
      ],
      providers: [FilteredEnergyAssetTimeseriesService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    filteredEnergyAssetTimeseriesService = TestBed.inject(
      FilteredEnergyAssetTimeseriesService
    );
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call unsetEnergyAssetId and unsetEnergyAssetTimeframe on ngOnDestroy', () => {
    const unsetEnergyAssetIdSpy = spyOn(
      filteredEnergyAssetTimeseriesService,
      'unsetEnergyAssetId'
    );
    const unsetEnergyAssetTimeframeSpy = spyOn(
      filteredEnergyAssetTimeseriesService,
      'unsetEnergyAssetTimeframe'
    );
    component.ngOnDestroy();
    expect(unsetEnergyAssetIdSpy).toHaveBeenCalled();
    expect(unsetEnergyAssetTimeframeSpy).toHaveBeenCalled();
  });
});
