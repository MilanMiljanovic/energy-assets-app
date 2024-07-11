import { generateEnergyAssetTimestamp } from '../utils/generateEnergyAssetTimestamp.util';
import EnergyAssetTimeseries from '../models/energyAssetTimeseries.model';

const energyAssetTimeseries: EnergyAssetTimeseries[] = [
  {
    assetId: 1,
    timestamp: generateEnergyAssetTimestamp(0),
    activePower: 50,
    voltage: 230,
  },
  {
    assetId: 1,
    timestamp: generateEnergyAssetTimestamp(0),
    activePower: 40,
    voltage: 220,
  },
  {
    assetId: 1,
    timestamp: generateEnergyAssetTimestamp(1),
    activePower: 45,
    voltage: 225,
  },
  {
    assetId: 1,
    timestamp: generateEnergyAssetTimestamp(1),
    activePower: 50,
    voltage: 230,
  },
  {
    assetId: 2,
    timestamp: generateEnergyAssetTimestamp(0),
    activePower: 60,
    voltage: 235,
  },
  {
    assetId: 2,
    timestamp: generateEnergyAssetTimestamp(0),
    activePower: 45,
    voltage: 234,
  },
  {
    assetId: 2,
    timestamp: generateEnergyAssetTimestamp(1),
    activePower: 55,
    voltage: 237,
  },
  {
    assetId: 2,
    timestamp: generateEnergyAssetTimestamp(1),
    activePower: 52,
    voltage: 230,
  },
  {
    assetId: 3,
    timestamp: generateEnergyAssetTimestamp(0),
    activePower: 41,
    voltage: 222,
  },
  {
    assetId: 3,
    timestamp: generateEnergyAssetTimestamp(0),
    activePower: 48,
    voltage: 229,
  },
  {
    assetId: 3,
    timestamp: generateEnergyAssetTimestamp(1),
    activePower: 44,
    voltage: 224,
  },
  {
    assetId: 3,
    timestamp: generateEnergyAssetTimestamp(1),
    activePower: 46,
    voltage: 240,
  },
];

export default energyAssetTimeseries;
