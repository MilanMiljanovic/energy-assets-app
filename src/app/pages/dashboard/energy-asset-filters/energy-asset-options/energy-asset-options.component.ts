import { Component } from '@angular/core';
import { FilteredEnergyAssetTimeseriesService } from '../../../../services/filteredEnergyAssetTimeseries.service';
import EnergyAssets from '../../../../models/energyAsset.model';
import energyAssets from '../../../../data/energyAssets.data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-energy-asset-options',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './energy-asset-options.component.html',
  styleUrl: './energy-asset-options.component.css',
})
export class EnergyAssetOptionsComponent {
  constructor(
    private filteredEnergyAssetTimeseriesService: FilteredEnergyAssetTimeseriesService
  ) {}

  private energyAssets: EnergyAssets[] = energyAssets;

  public getEnergyAssets = (): EnergyAssets[] => {
    return this.energyAssets;
  };

  public selectEnergyAsset = (event: Event): void => {
    const target = event.target as HTMLSelectElement;
    this.filteredEnergyAssetTimeseriesService.setEnergyAssetId(
      Number(target.value)
    );
  };
}
