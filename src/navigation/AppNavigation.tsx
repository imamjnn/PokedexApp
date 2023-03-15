import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import PokemonList from '@screens/pokemonList/PokemonList';
import DetailPokemon from '@screens/detailPokemon/DetailPokemon';

export type AppNavigationParams = {
  PokemonList: undefined;
  DetailPokemon: {
    id: number;
  };
};

const Stack = createNativeStackNavigator<AppNavigationParams>();

export const AppNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="PokemonList">
      <Stack.Screen name="PokemonList" component={PokemonList} />
      <Stack.Screen name="DetailPokemon" component={DetailPokemon} />
    </Stack.Navigator>
  );
};

export type AppNavigationProps = NativeStackNavigationProp<AppNavigationParams>;
