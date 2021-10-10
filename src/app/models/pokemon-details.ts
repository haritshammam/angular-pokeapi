import { NameUrl } from './base-name-url';
import { VersionDetails } from './base-version-details';

export interface Pokemon {
  id: number;
  name: string;
  abilities: {
    is_hidden: boolean;
    slot: number;
    ability: NameUrl;
  }[];
  stats: {
    base_stat: number;
    effort: number;
    stat: NameUrl;
  }[];
  types: {
    slot: number;
    type: NameUrl;
  }[];
}
