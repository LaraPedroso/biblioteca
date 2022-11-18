import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

export function ButtonCustom({title, onPress, style}) {
  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        style={style ? style : styles.container}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </>
  );
}
