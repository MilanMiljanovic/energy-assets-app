import { Component, OnInit, OnDestroy } from '@angular/core';
import * as echarts from 'echarts';
import { Subscription } from 'rxjs';
import EnergyAssetTimeseries from '../../../models/energyAssetTimeseries.model';
import { FilteredEnergyAssetTimeseriesService } from '../../../services/filteredEnergyAssetTimeseries.service';

@Component({
  selector: 'app-energy-asset-timeseries-line-chart',
  standalone: true,
  templateUrl: './energy-asset-timeseries-line-chart.component.html',
  styleUrls: ['./energy-asset-timeseries-line-chart.component.css'],
})
export class EnergyAssetTimeseriesLineChartComponent
  implements OnInit, OnDestroy
{
  private subscription: Subscription = new Subscription();
  private chartInstance: echarts.ECharts | null = null;

  constructor(
    private filteredEnergyAssetTimeseriesService: FilteredEnergyAssetTimeseriesService
  ) {}

  ngOnInit(): void {
    this.initChart();
    this.subscription.add(
      this.filteredEnergyAssetTimeseriesService.filteredEnergyAssetTimeseries.subscribe(
        (data) => {
          this.loadData(data);
        }
      )
    );
  }

  private initChart(): void {
    const chartEl: HTMLElement = document.getElementById('chart')!;
    this.chartInstance = echarts.init(chartEl);
  }

  private loadData(data: EnergyAssetTimeseries[]): void {
    const option: echarts.EChartsOption = {
      xAxis: {
        type: 'category',
        data: data.map((item) => item.timestamp),
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
          data: data.map((item) => item.activePower),
        },
        {
          name: 'Voltage',
          type: 'line',
          yAxisIndex: 1,
          data: data.map((item) => item.voltage),
        },
      ],
    };
    this.chartInstance?.setOption(option);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
