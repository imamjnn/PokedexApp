import {ResponseAPI} from '@utils/types';

export interface PokemonListResults {
  name: string;
  url: string;
}

export type PokemonListData = {
  count: number;
  next: string;
  previous?: string;
  results: PokemonListResults[];
};

export type PokemonListResponse = ResponseAPI<PokemonListData>;
