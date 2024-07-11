import { Component, OnDestroy } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FilteredEnergyAssetTimeseriesService } from '../../services/filteredEnergyAssetTimeseries.service';
import { EnergyAssetTimeseriesLineChartComponent } from './energy-asset-timeseries-line-chart/energy-asset-timeseries-line-chart.component';
import { EnergyAssetFiltersComponent } from './energy-asset-filters/energy-asset-filters.component';
import { EnergyAssetTimeseriesTableComponent } from './energy-asset-timeseries-table/energy-asset-timeseries-table.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    HeaderComponent,
    EnergyAssetFiltersComponent,
    EnergyAssetTimeseriesLineChartComponent,
    EnergyAssetTimeseriesTableComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnDestroy {
  constructor(
    private filteredEnergyAssetTimeseriesService: FilteredEnergyAssetTimeseriesService
  ) {}

  ngOnDestroy(): void {
    this.filteredEnergyAssetTimeseriesService.unsetEnergyAssetId();
    this.filteredEnergyAssetTimeseriesService.unsetEnergyAssetTimeframe();
  }
}
