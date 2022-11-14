import React from 'react';
import {TouchableOpacity, ImageBackground, Text} from 'react-native';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {THEME} from '../../theme';

export function BookCard({data, ...rest}) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground style={styles.cover} source={data.img}>
        <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
          <Text style={styles.name}>{data.name}</Text>

          <Text style={styles.ads}> {data.ads} Anuncios</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}
