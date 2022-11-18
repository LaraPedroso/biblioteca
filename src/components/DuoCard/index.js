import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {ButtonCustom} from '../ButtonCustom';
import {DuoInfo} from '../DuoInfo';

import {styles} from './styles';

export function DuoCard({data}) {
  const navigation = useNavigation();

  function handleOpenPageRead() {
    navigation.navigate('pagesread');
  }
  // console.log('data', data.ads);
  return (
    <View style={styles.container}>
      <DuoInfo label="Nome: " value={data.name} />
      <DuoInfo label="Autor: " value={data.autor} />
      <DuoInfo label="Descrição: " value={data.describe} />
      <ButtonCustom
        onPress={handleOpenPageRead}
        title="Começar a ler ..."
        style={{margin: 5}}
      />
    </View>
  );
}
