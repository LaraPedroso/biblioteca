import React from 'react';

import {Image, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Background} from '../../components/Background';
import {useRoute} from '@react-navigation/native';
import {styles} from './styles';
import logoImg from '../../assets/logoBook3.png';
import {Heading} from '../../components/Heading';
import {DuoCard} from '../../components/DuoCard';
import {ButtonBack} from '../../components/ButtonBack';
export function Book() {
  // const [duos, setDuos] = useState()
  const route = useRoute();
  const book = route.params;

  // useEffect(() => {
  //   fetch(`URL/${book.id}/ads`);
  //   .then(response => response.json())
  //   .then(data => setDuos())
  // });

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <ButtonBack />
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
