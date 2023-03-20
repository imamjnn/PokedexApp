import {ResponseAPI} from '@utils/types';

// pokemon detail
export type DetailPokemonAbilities = {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
};

export type DetailPokemonForms = {
  name: string;
  url: string;
};

export type DetailPokemonSprites = {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
};

export type DetailPokemonTypes = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

export type DetailPokemonMoves = {
  move: {
    name: string;
    url: string;
  };
  version_group_details: [
    {
      level_learned_at: number;
      move_learn_method: {
        name: string;
        url: string;
      };
      version_group: {
        name: string;
        url: string;
      };
    },
  ];
};

export type DetailPokemonData = {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: DetailPokemonAbilities[];
  forms: DetailPokemonForms[];
  sprites: DetailPokemonSprites;
  types: DetailPokemonTypes[];
  moves: DetailPokemonMoves[];
};

export type DetailPokemonResponse = ResponseAPI<DetailPokemonData>;

// pokemon species
export type PokemonSpeciesData = {
  evolution_chain: {
    url: string;
  };
};

export type PokemonSpeciesResponse = ResponseAPI<PokemonSpeciesData>;

// pokemon evolution
export type PokemonEvolvesTo = {
  is_baby: boolean;
  species: {
    name: string;
    url: string;
  };
  evolves_to: {
    is_baby: boolean;
    species: {
      name: string;
      url: string;
    };
  }[];
};

export type PokemonEvolutionData = {
  chain: {
    evolves_to: PokemonEvolvesTo[];
    is_baby: boolean;
    species: {
      name: string;
      url: string;
    };
  };
};

export type PokemonEvolutionResponse = ResponseAPI<PokemonEvolutionData>;
