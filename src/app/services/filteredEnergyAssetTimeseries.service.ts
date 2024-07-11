import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import EnergyAssetTimeseries from '../models/energyAssetTimeseries.model';
import energyAssetTimeseries from '../data/energyAssetTimeseries.data';
import { generateEnergyAssetTimestamp } from '../utils/generateEnergyAssetTimestamp.util';

// This service is used for sharing filtered timeseries between components.

@Injectable({
  providedIn: 'root',
})
export class FilteredEnergyAssetTimeseriesService {
  private filteredEnergyAssetTimeseriesSubject = new BehaviorSubject<
    EnergyAssetTimeseries[]
  >([]);
  public filteredEnergyAssetTimeseries: Observable<EnergyAssetTimeseries[]> =
    this.filteredEnergyAssetTimeseriesSubject.asObservable();

  private energyAssetTimeframe = -1;
  private energyAssetIdSubject = new BehaviorSubject<number>(-1);
  private energyAssetId: Observable<number> =
    this.energyAssetIdSubject.asObservable();

  public setEnergyAssetId = (id: number): void => {
    this.energyAssetIdSubject.next(id);
    this.filterEnergyAssetTimeseries();
  };

  public setEnergyAssetTimeframe = (timeframe: number): void => {
    this.energyAssetTimeframe = timeframe;
    this.filterEnergyAssetTimeseries();
  };

  public unsetEnergyAssetId = (): void => {
    this.energyAssetIdSubject.next(-1);
    this.filterEnergyAssetTimeseries();
  };

  public unsetEnergyAssetTimeframe = (): void => {
    this.energyAssetTimeframe = -1;
    this.filterEnergyAssetTimeseries();
  };

  public getFilteredEnergyAssetTimeseries = (): Observable<
    EnergyAssetTimeseries[]
  > => {
    return this.filteredEnergyAssetTimeseries;
  };

  public getEnergyAssetId = (): Observable<number> => {
    return this.energyAssetId;
  };

  private filterEnergyAssetTimeseries = (): void => {
    let filteredEnergyAssetTimeseries: EnergyAssetTimeseries[] = [];

    const energyAssetId = this.energyAssetIdSubject.getValue();
    const energyAssetTimeframe = this.energyAssetTimeframe;

    // Filter by both selected asset id and timeframe
    if (energyAssetId !== -1 && energyAssetTimeframe !== -1) {
      filteredEnergyAssetTimeseries = energyAssetTimeseries.filter(
        (item) =>
          item.assetId === energyAssetId &&
          item.timestamp === generateEnergyAssetTimestamp(energyAssetTimeframe)
      );
    }
    // Filter only by selected asset id
    else if (energyAssetId !== -1) {
      filteredEnergyAssetTimeseries = energyAssetTimeseries.filter(
        (item) => item.assetId === energyAssetId
      );
    }
    // No filters applied
    else {
      filteredEnergyAssetTimeseries = [];
    }

    this.filteredEnergyAssetTimeseriesSubject.next(
      filteredEnergyAssetTimeseries
    );
  };
}
