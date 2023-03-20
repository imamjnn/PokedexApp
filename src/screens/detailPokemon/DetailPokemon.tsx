/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {AppNavigationParams} from '@navigation/AppNavigation';
import {RouteProp, useRoute} from '@react-navigation/native';
import {ActivityIndicator, Image, ScrollView, Text, View} from 'react-native';
import {getDetailPokemon} from './detailPokemon.datasource';
import {DetailPokemonData} from './detailPokemon.types';
import detailPokemonStyles from './detailPokemon.styles';
import {emptyImg} from '@utils/static';

type DetailPokemonRouteProps = RouteProp<AppNavigationParams, 'DetailPokemon'>;

const DetailPokemon = () => {
  const {params} = useRoute<DetailPokemonRouteProps>();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<DetailPokemonData>();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await getDetailPokemon(params.id);
    console.log(response);
    setLoading(false);
    if (response) {
      setData(response);
    }
  };

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <ScrollView contentContainerStyle={detailPokemonStyles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Image
          source={{uri: data?.sprites.front_default ? data?.sprites.front_default : emptyImg}}
          style={detailPokemonStyles.img}
        />
        <Image
          source={{uri: data?.sprites.back_default ? data?.sprites.back_default : emptyImg}}
          style={detailPokemonStyles.img}
        />
        <Image
          source={{uri: data?.sprites.front_shiny ? data?.sprites.front_shiny : emptyImg}}
          style={detailPokemonStyles.img}
        />
        <Image
          source={{uri: data?.sprites.back_shiny ? data?.sprites.back_shiny : emptyImg}}
          style={detailPokemonStyles.img}
        />
      </View>
      <Text style={{fontWeight: '800'}}>name: {data?.name}</Text>
      <Text style={{fontWeight: '800'}}>height: {data?.height}</Text>
      <Text style={{fontWeight: '800'}}>weight: {data?.weight}</Text>
      <Text style={{fontWeight: '800'}}>type: {data?.types.map(type => type.type.name)}</Text>
      <Text style={{fontWeight: '800'}}>Moves:</Text>
      {data?.moves.slice(0, 10).map(item => (
        <Text>{item.move.name}</Text>
      ))}
    </ScrollView>
  );
};

export default DetailPokemon;
