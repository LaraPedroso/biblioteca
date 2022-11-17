import React from 'react';
import {View} from 'react-native';
import {DuoInfo} from '../DuoInfo';

import {styles} from './styles';

export function DuoCard({data}) {
  // console.log('data', data.ads);
  return (
    <View style={styles.container}>
      <DuoInfo label="Nome: " value={data.name} />
      <DuoInfo label="Autor: " value={data.autor} />
      <DuoInfo label="Descrição: " value={data.describe} />
    </View>
  );
}
