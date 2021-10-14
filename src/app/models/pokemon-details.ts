import { NameUrl } from './base-name-url';
import { VersionDetails } from './base-version-details';

export interface Pokemon {
  pokemonId: number;
  name: string;
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
