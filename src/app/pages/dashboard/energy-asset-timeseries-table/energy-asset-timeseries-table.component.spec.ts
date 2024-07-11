import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { EnergyAssetTimeseriesTableComponent } from './energy-asset-timeseries-table.component';
import { FilteredEnergyAssetTimeseriesService } from '../../../services/filteredEnergyAssetTimeseries.service';
import EnergyAssetTimeseries from '../../../models/energyAssetTimeseries.model';
import { CommonModule } from '@angular/common';
import energyAssetTimeseries from '../../../data/energyAssetTimeseries.data';

describe('EnergyAssetTimeseriesTableComponent', () => {
  let component: EnergyAssetTimeseriesTableComponent;
  let fixture: ComponentFixture<EnergyAssetTimeseriesTableComponent>;
  let filteredEnergyAssetTimeseriesService: FilteredEnergyAssetTimeseriesService;
  const mockData: EnergyAssetTimeseries[] = energyAssetTimeseries;

  beforeEach(async () => {
    const filteredEnergyAssetTimeseriesServiceMock = {
      getFilteredEnergyAssetTimeseries: jasmine
        .createSpy('getFilteredEnergyAssetTimeseries')
        .and.returnValue(of(mockData)),
    };

    await TestBed.configureTestingModule({
      declarations: [EnergyAssetTimeseriesTableComponent],
      imports: [CommonModule],
      providers: [
        {
          provide: FilteredEnergyAssetTimeseriesService,
          useValue: filteredEnergyAssetTimeseriesServiceMock,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergyAssetTimeseriesTableComponent);
    component = fixture.componentInstance;
    filteredEnergyAssetTimeseriesService = TestBed.inject(
      FilteredEnergyAssetTimeseriesService
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should subscribe to filtered energy asset timeseries data on init', () => {
    expect(
      filteredEnergyAssetTimeseriesService.getFilteredEnergyAssetTimeseries
    ).toHaveBeenCalled();
    expect(component.getTableData()).toEqual(mockData);
  });

  it('should unsubscribe on destroy', () => {
    spyOn(component['subscription'], 'unsubscribe');
    component.ngOnDestroy();
    expect(component['subscription'].unsubscribe).toHaveBeenCalled();
  });
});
