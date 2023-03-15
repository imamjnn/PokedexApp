import axiosCall from '@services/axiosCall';
import axios from 'axios';
import {PokemonListResponse} from './pokemonList.types';

export const getAllPokemon = async (offset: number, limit: number = 21) => {
  try {
    const response = await axiosCall.get<PokemonListResponse>(
      `/pokemon?offset=${offset}&limit=${limit}`,
    );

    if (response.status === 200 && response.data !== null) {
      return response.data;
    }

    return null;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      return null;
    }

    return null;
  }
};
