import { Component } from '@angular/core';
import { EnergyAssetOptionsComponent } from './energy-asset-options/energy-asset-options.component';
import { EnergyAssetTimeframeOptionsComponent } from './energy-asset-timeframe-options/energy-asset-timeframe-options.component';

@Component({
  selector: 'app-energy-asset-filters',
  standalone: true,
  imports: [EnergyAssetOptionsComponent, EnergyAssetTimeframeOptionsComponent],
  templateUrl: './energy-asset-filters.component.html',
  styleUrl: './energy-asset-filters.component.css',
})
export class EnergyAssetFiltersComponent {}
