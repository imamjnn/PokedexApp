import {atom} from 'recoil';
import {PokemonListResults} from '../pokemonList.types';

export const searchValueState = atom<string>({
  key: 'searchValueState',
  default: '',
});

export const pokemonFilteredState = atom<PokemonListResults[] | []>({
  key: 'pokemonFilteredState',
  default: [],
});
