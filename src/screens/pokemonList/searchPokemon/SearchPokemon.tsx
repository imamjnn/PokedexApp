import {Text} from '@components';
import {AppNavigationProps} from '@navigation/AppNavigation';
import {useNavigation} from '@react-navigation/native';
import {extractIdFromUrl} from '@utils/formatter';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Pressable, TextInput, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {getAllPokemon} from '../pokemonList.datasource';
import {PokemonListResults} from '../pokemonList.types';
import searchPokemonStyles from './searchPokemon.styles';

const SearchPokemon = () => {
  const navigation = useNavigation<AppNavigationProps>();

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<PokemonListResults[]>([]);
  const [pokeFiltered, setPokeFiltered] = useState<PokemonListResults[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    const response = await getAllPokemon(0, 10000);
    setLoading(false);
    if (response) {
      setData(response.results);
    }
  };

  const onFilter = (name: string) => {
    setPokeFiltered(data.filter(a => a.name.includes(name)));
  };

  const onPressItem = (id: number) => {
    navigation.navigate('DetailPokemon', {id});
  };

  const _renderItem = ({item: props}: {item: PokemonListResults}) => (
    <Pressable
      style={searchPokemonStyles.item}
      onPress={() => onPressItem(extractIdFromUrl(props.url))}>
      <Text>{props.name}</Text>
    </Pressable>
  );

  return (
    <SafeAreaView>
      {loading ? (
        <View>
          <ActivityIndicator />
          <Text>Please wait..</Text>
        </View>
      ) : (
        <View>
          <TextInput placeholder="Search name.." onChangeText={txt => onFilter(txt)} />
          <FlatList
            data={pokeFiltered}
            keyExtractor={item => item.name}
            renderItem={_renderItem}
            keyboardShouldPersistTaps="always"
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default SearchPokemon;
