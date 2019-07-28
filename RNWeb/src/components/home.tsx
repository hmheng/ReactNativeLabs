import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import pokemon from '../stores/pokemonStore';

const Home = (props : any) => {
  const handlePress = (pokemon:any) => {
    props.selectPokemon(pokemon);
    props.history.push('pokemon');
  };
  return (
    <View>
      <FlatList
        data={pokemon}
        keyExtractor={pokemon => pokemon.number}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePress(item)}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Home;