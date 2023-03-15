import axiosCall from '@services/axiosCall';
import axios from 'axios';
import {DetailPokemonResponse} from './detailPokemon.types';

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
