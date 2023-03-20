import axiosCall from '@services/axiosCall';
import axios from 'axios';
import {
  DetailPokemonResponse,
  PokemonEvolutionResponse,
  PokemonSpeciesResponse,
} from './detailPokemon.types';

export const getDetailPokemon = async (id: number) => {
  try {
    const response = await axiosCall.get<DetailPokemonResponse>(`/pokemon/${id}`);

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

export const getPokemonSpecies = async (name: string) => {
  try {
    const response = await axiosCall.get<PokemonSpeciesResponse>(`/pokemon-species/${name}`);

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

export const getPokemonEvolve = async (id: number | undefined) => {
  try {
    const response = await axiosCall.get<PokemonEvolutionResponse>(`/evolution-chain/${id}`);

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
