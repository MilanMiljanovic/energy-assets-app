import { Component, OnInit } from '@angular/core';
import { FilteredEnergyAssetTimeseriesService } from '../../../../services/filteredEnergyAssetTimeseries.service';
import { CommonModule } from '@angular/common';
import EnergyAssetTimeframe from '../../../../models/energyAssetTimeframe.model';
import energyAssetTimeframes from '../../../../data/energyAssetTimeframes.data';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-energy-asset-timeframe-options',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './energy-asset-timeframe-options.component.html',
  styleUrls: ['./energy-asset-timeframe-options.component.css'],
})
export class EnergyAssetTimeframeOptionsComponent implements OnInit {
  constructor(
    private filteredEnergyAssetTimeseriesService: FilteredEnergyAssetTimeseriesService
  ) {}

  private subscription: Subscription = new Subscription();
  private energyAssetTimeframes: EnergyAssetTimeframe[] = energyAssetTimeframes;
  private energyAssetId = -1;

  ngOnInit(): void {
    this.subscription.add(
      this.filteredEnergyAssetTimeseriesService
        .getEnergyAssetId()
        .subscribe((id) => {
          this.energyAssetId = id;
        })
    );
  }

  public getEnergyAssetTimeframes = (): EnergyAssetTimeframe[] => {
    return this.energyAssetTimeframes;
  };

  public getEnergyAssetId = (): number => {
    return this.energyAssetId;
  };

  public selectEnergyAssetTimeframe(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const timeframe = Number(target.value);
    this.filteredEnergyAssetTimeseriesService.setEnergyAssetTimeframe(
      timeframe
    );
  }
}
