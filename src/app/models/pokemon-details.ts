import { NameUrl } from './base-name-url';
import { VersionDetails } from './base-version-details';

export interface Pokemon {
  id: number;
  name: string;
  url: string;
  details: {
    imageUrl: string;
    types: string[];
    stats: {
      name: string;
      base: number;
    }[];
    abilitiesName: string[];
    height: number;
    weight: number;
  };
}
