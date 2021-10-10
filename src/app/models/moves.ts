import { EffectEntries } from './base-effect-entries';
import { NameUrl } from './base-name-url';

interface ContestCombosBeforeAfter {
  use_before?: NameUrl[];
  use_after?: NameUrl[];
}

export interface Moves {
  id: number;
  name: string;
  accuracy: number;
  effect_chance: any;
  pp: number;
  priority: number;
  power: number;
  contest_combos: {
    normal: ContestCombosBeforeAfter;
    super: ContestCombosBeforeAfter;
  };
  contest_type: NameUrl;
  contest_effect: {
    url: string;
  };
  damage_class: NameUrl;
  effect_entries: EffectEntries[];
  effect_changes: any[];
  generation: NameUrl;
  meta: {
    ailment: NameUrl;
    category: NameUrl;
    min_hits: any;
    min_turns: any;
    max_hits: any;
    max_turns: any;
    drain: number;
    healing: number;
    crit_rate: number;
    ailment_chance: number;
    flinch_chance: number;
    stat_chance: number;
  };
  names: {
    name: string;
    language: NameUrl;
  }[];
  past_values: any[];
  stat_changes: any[];
  super_contest_effect: {
    url: string;
  };
  target: NameUrl;
  type: NameUrl;
  flavor_text_entries: {
    flavor_text: string;
    language: NameUrl;
    version_group: NameUrl;
  }[];
}
