import React from 'react';

import {Image, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Background} from '../../components/Background';
import {useNavigation, useRoute} from '@react-navigation/native';
import {styles} from './styles';

import logoImg from '../../assets/logoBook3.png';
import {Heading} from '../../components/Heading';
import {DuoCard} from '../../components/DuoCard';
import Icon from 'react-native-vector-icons/Feather';
export function Book() {
  // const [duos, setDuos] = useState()
  const route = useRoute();
  const book = route.params;
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  // useEffect(() => {
  //   fetch(`URL/${book.id}/ads`);
  //   .then(response => response.json())
  //   .then(data => setDuos())
  // });
  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Icon name="arrow-left" size={60} color="white" />
            <Text>Voltar</Text>
          </TouchableOpacity>
          <Image source={logoImg} style={styles.logo} />
          <View style={styles.right} />
        </View>
        <Image source={book.img} style={styles.img} resizeMode="cover" />
        <Heading title={book.name} subtitle={'Viaja sem sair do lugar !!!'} />
        <DuoCard data={book} />
      </SafeAreaView>
    </Background>
  );
}
