interface EnergyAssetTimeseries {
  assetId: number;
  timestamp: string;
  activePower: number;
  voltage: number;
}

export default EnergyAssetTimeseries;
