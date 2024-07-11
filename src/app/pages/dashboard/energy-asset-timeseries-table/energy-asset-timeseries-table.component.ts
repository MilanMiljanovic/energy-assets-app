import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import EnergyAssetTimeseries from '../../../models/energyAssetTimeseries.model';
import { CommonModule } from '@angular/common';
import { FilteredEnergyAssetTimeseriesService } from '../../../services/filteredEnergyAssetTimeseries.service';

@Component({
  selector: 'app-energy-asset-timeseries-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './energy-asset-timeseries-table.component.html',
  styleUrl: './energy-asset-timeseries-table.component.css',
})
export class EnergyAssetTimeseriesTableComponent implements OnInit, OnDestroy {
  constructor(
    private filteredEnergyAssetTimeseriesService: FilteredEnergyAssetTimeseriesService
  ) {}

  private subscription: Subscription = new Subscription();
  private tableData: EnergyAssetTimeseries[] = [];

  ngOnInit(): void {
    this.subscription.add(
      this.filteredEnergyAssetTimeseriesService
        .getFilteredEnergyAssetTimeseries()
        .subscribe((data) => {
          this.tableData = data;
        })
    );
  }

  public getTableData = (): EnergyAssetTimeseries[] => {
    return this.tableData;
  };

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
