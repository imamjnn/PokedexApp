import React, {useEffect, useState} from 'react';
import {FlatList, RefreshControl, Text, useWindowDimensions, View} from 'react-native';
import {getAllPokemon} from './pokemonList.datasource';
import pokemonListStyles from './pokemonList.styles';
import {PokemonListResults} from './pokemonList.types';

const PokemonList = () => {
  const {width} = useWindowDimensions();

  const [data, setData] = useState<PokemonListResults[]>([]);
  const [loading, setLoading] = useState(false);
  const [stopMore, setStopMore] = useState(false);
  const [nextPage, setNextPage] = useState(0);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    const response = await getAllPokemon(0, 21);
    setLoading(false);
    if (response) {
      setData(response.results);
    }
  };
  const loadMoreData = async () => {
    setLoading(true);
    setNextPage(nextPage + 8);
    const response = await getAllPokemon(nextPage + 8, 8);
    console.log(response, nextPage);
    setLoading(false);
    if (response) {
      if (response.results.length === 0) {
        setStopMore(true);
      } else {
        const mergeData = [...data, ...response.results];
        setData(mergeData);
      }
    }
  };

  const _renderItem = ({item: props}: {item: PokemonListResults}) => (
    <View style={[pokemonListStyles.card, {width: (width - 10) / 2}]}>
      <Text>{props.name}</Text>
    </View>
  );

  return (
    <View style={pokemonListStyles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.name}
        renderItem={_renderItem}
        numColumns={2}
        contentContainerStyle={pokemonListStyles.list}
        columnWrapperStyle={pokemonListStyles.column}
        refreshControl={<RefreshControl refreshing={loading} onRefresh={() => loadData()} />}
        onEndReached={!stopMore ? loadMoreData : null}
        onEndReachedThreshold={0.6}
      />
    </View>
  );
};

export default PokemonList;
