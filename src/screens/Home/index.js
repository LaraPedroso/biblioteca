import React from 'react';
import {Image, FlatList, TouchableOpacity, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import logoImg from '../../assets/logoBook3.png';
import {BookCard} from '../../components/BookCard';
import {Heading} from '../../components/Heading';
import {Background} from '../../components/Background';
import {useNavigation} from '@react-navigation/native';
import {BookS} from '../../utils';
import {styles} from './styles';

export function Home() {
  const navigation = useNavigation();

  function handleOpenBook({id, name, img, describe, autor}) {
    navigation.navigate('book', {id, name, img, describe, autor});
  }
  function handleLogin() {
    navigation.navigate('login');
  }
  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.login} onPress={handleLogin}>
          <Text>Login</Text>
        </TouchableOpacity>
        <Image source={logoImg} style={styles.logo} />
        <Heading
          title="Encontre seu Livro"
          subtitle="Selecione o livro que deseja ler..."
        />
        <FlatList
          data={BookS}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contenList}
          renderItem={({item}) => (
            <BookCard data={item} onPress={() => handleOpenBook(item)} />
          )}
        />
      </SafeAreaView>
    </Background>
  );
}
