import { NameUrl } from './base-name-url';
import { EffectEntries } from './base-effect-entries';
import { VersionDetails } from './base-version-details';

export interface Items {
  id: number;
  name: string;
  cost: number;
  fling_power: number;
  fling_effect: NameUrl;
  attributes: NameUrl[];
  category: NameUrl;
  effect_entries: EffectEntries[];
  flavor_text_entries: {
    text: string;
    version_group: NameUrl;
    language: NameUrl;
  }[];
  game_indices: {
    game_index: number;
    generation: NameUrl;
  }[];
  names: {
    name: string;
    language: NameUrl;
  }[];
  sprites: {
    default: string;
  };
  held_by_pokemon: {
    pokemon: NameUrl;
    version_details: VersionDetails[];
  }[];
  baby_trigger_for: {
    url: string;
  };
}
