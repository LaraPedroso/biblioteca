import React from 'react';
import {View} from 'react-native';
import {DuoInfo} from '../DuoInfo';

import {styles} from './styles';

export function DuoCard({data}) {
  return (
    <View style={styles.container}>
      <DuoInfo label="Nome" value={data.autor} />
    </View>
  );
}
