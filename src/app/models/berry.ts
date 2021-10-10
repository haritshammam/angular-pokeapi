import { NameUrl } from './base-name-url';

export interface Berry {
  id: number;
  name: string;
  growth_time: number;
  max_harvest: number;
  natural_gift_power: number;
  size: number;
  smoothness: number;
  soil_dryness: number;
  firmness: NameUrl;
  flavors: {
    potency: number;
    flavor: NameUrl;
  }[];
  item: NameUrl;
  natural_gift_type: NameUrl;
}
