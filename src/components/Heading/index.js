import React from 'react';
import {View, Text} from 'react-native';

import {styles} from './styles';

export function Heading({title, subtitle, ...rest}) {
  return (
    <View style={styles.container} {...rest}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}> {subtitle}</Text>
    </View>
  );
}
