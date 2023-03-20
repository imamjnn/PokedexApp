/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {AppNavigationParams} from '@navigation/AppNavigation';
import {RouteProp, useRoute} from '@react-navigation/native';
import {ActivityIndicator, Button, Image, ScrollView, View} from 'react-native';
import {getDetailPokemon, getPokemonEvolve, getPokemonSpecies} from './detailPokemon.datasource';
import {DetailPokemonData, PokemonEvolutionData} from './detailPokemon.types';
import detailPokemonStyles from './detailPokemon.styles';
import {emptyImg} from '@utils/static';
import {extractIdFromUrl} from '@utils/formatter';
import {Text} from '@components';

type DetailPokemonRouteProps = RouteProp<AppNavigationParams, 'DetailPokemon'>;

const DetailPokemon = () => {
  const {params} = useRoute<DetailPokemonRouteProps>();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<DetailPokemonData>();
  const [evolveId, setEvolveId] = useState<number>();
  const [evolveList, setEvolveList] = useState<PokemonEvolutionData>();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await getDetailPokemon(params.id);
    console.log(response);
    setLoading(false);
    if (response) {
      setData(response);
      getPokemonSpecies(response.name).then(species => {
        if (species) {
          const splitId = extractIdFromUrl(species?.evolution_chain.url);
          setEvolveId(splitId);
        }
      });
    }
  };

  const loadEvolveChain = async (id: number | undefined) => {
    const response = await getPokemonEvolve(id);
    console.log(response);
    if (response) {
      setEvolveList(response);
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
      <Text weight="semiBold">name: {data?.name}</Text>
      <Text weight="semiBold">height: {data?.height}</Text>
      <Text weight="semiBold">weight: {data?.weight}</Text>
      <Text weight="semiBold">type: {data?.types.map(type => type.type.name)}</Text>
      <Text weight="semiBold">Moves:</Text>
      {data?.moves.slice(0, 10).map(item => (
        <Text>{item.move.name}</Text>
      ))}
      <Button title="show evolve" onPress={() => loadEvolveChain(evolveId)} />
      {evolveList ? (
        <View>
          <Text>{evolveList.chain.species.name}</Text>
          {evolveList.chain.evolves_to.map(item => (
            <View key={item.species.name}>
              <Text>{item.species.name}</Text>
              {item.evolves_to.map(item2 => (
                <Text key={item.species.name}>{item2.species.name}</Text>
              ))}
            </View>
          ))}
        </View>
      ) : null}
    </ScrollView>
  );
};

export default DetailPokemon;
