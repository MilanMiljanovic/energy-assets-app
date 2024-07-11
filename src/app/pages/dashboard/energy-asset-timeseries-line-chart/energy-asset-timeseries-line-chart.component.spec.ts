/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { EnergyAssetTimeseriesLineChartComponent } from './energy-asset-timeseries-line-chart.component';
import { FilteredEnergyAssetTimeseriesService } from '../../../services/filteredEnergyAssetTimeseries.service';
import EnergyAssetTimeseries from '../../../models/energyAssetTimeseries.model';
import energyAssetTimeseries from '../../../data/energyAssetTimeseries.data';

// Mocking echarts instance
const echartsMock = {
  init: jasmine.createSpy('init').and.returnValue({
    setOption: jasmine.createSpy('setOption'),
  }),
};

describe('EnergyAssetTimeseriesLineChartComponent', () => {
  let component: EnergyAssetTimeseriesLineChartComponent;
  let fixture: ComponentFixture<EnergyAssetTimeseriesLineChartComponent>;
  let filteredEnergyAssetTimeseriesService: FilteredEnergyAssetTimeseriesService;
  const mockData: EnergyAssetTimeseries[] = energyAssetTimeseries;

  beforeEach(async () => {
    const filteredEnergyAssetTimeseriesServiceMock = {
      filteredEnergyAssetTimeseries: of(mockData),
    };

    await TestBed.configureTestingModule({
      declarations: [EnergyAssetTimeseriesLineChartComponent],
      providers: [
        {
          provide: FilteredEnergyAssetTimeseriesService,
          useValue: filteredEnergyAssetTimeseriesServiceMock,
        },
      ],
    }).compileComponents();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).echarts = echartsMock;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergyAssetTimeseriesLineChartComponent);
    component = fixture.componentInstance;
    filteredEnergyAssetTimeseriesService = TestBed.inject(
      FilteredEnergyAssetTimeseriesService
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the chart on init', () => {
    expect(echartsMock.init).toHaveBeenCalled();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect((component as any).chartInstance).toBeTruthy();
  });

  it('should load data into the chart', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const chartInstance = (component as any).chartInstance;
    expect(chartInstance.setOption).toHaveBeenCalledWith({
      xAxis: {
        type: 'category',
        data: mockData.map((item) => item.timestamp),
      },
      yAxis: [
        {
          type: 'value',
          name: 'Active Power (kW)',
        },
        {
          type: 'value',
          name: 'Voltage (V)',
        },
      ],
      series: [
        {
          name: 'Active Power',
          type: 'line',
          data: mockData.map((item) => item.activePower),
        },
        {
          name: 'Voltage',
          type: 'line',
          yAxisIndex: 1,
          data: mockData.map((item) => item.voltage),
        },
      ],
    });
  });

  it('should unsubscribe on destroy', () => {
    spyOn(component['subscription'], 'unsubscribe');
    component.ngOnDestroy();
    expect(component['subscription'].unsubscribe).toHaveBeenCalled();
  });
});
