import React from 'react';
import {Text, View} from 'react-native';

import {styles} from './styles';

export function DuoInfo({label, value}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}
