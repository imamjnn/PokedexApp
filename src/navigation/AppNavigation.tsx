import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import PokemonList from '@screens/pokemonList/PokemonList';
import DetailPokemon from '@screens/detailPokemon/DetailPokemon';
import SearchPokemon from '@screens/pokemonList/searchPokemon/SearchPokemon';

export type AppNavigationParams = {
  PokemonList: undefined;
  SearchPokemon: undefined;
  DetailPokemon: {
    id: number;
  };
};

const Stack = createNativeStackNavigator<AppNavigationParams>();

export const AppNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="PokemonList">
      <Stack.Screen name="PokemonList" component={PokemonList} options={{title: 'Pokemon List'}} />
      <Stack.Screen
        name="SearchPokemon"
        component={SearchPokemon}
        options={{title: 'Search Pokemon'}}
      />
      <Stack.Screen
        name="DetailPokemon"
        component={DetailPokemon}
        options={{title: 'Detail Pokemon'}}
      />
    </Stack.Navigator>
  );
};

export type AppNavigationProps = NativeStackNavigationProp<AppNavigationParams>;
