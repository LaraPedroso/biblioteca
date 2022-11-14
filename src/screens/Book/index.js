import React from 'react';

import {Image, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Background} from '../../components/Background';
import {useRoute} from '@react-navigation/native';
import {THEME} from '../../theme';
import {styles} from './styles';

import {IconComponentProvider} from '@react-native-material/core';
import Entypo from 'react-native-vector-icons/Entypo';
import logoImg from '../../assets/logoBook3.png';

export function Book() {
  const route = useRoute();
  const book = route.params;
  console.log(book);
  return (
    <IconComponentProvider IconComponent={Entypo}>
      <Background>
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity>
              <Entypo
                name="chevron-thin-left"
                color={THEME.COLORS.CAPTION_300}
                size={30}
              />
            </TouchableOpacity>
            <Image source={logoImg} style={styles.logo} />
            <View style={styles.right} />
          </View>
        </SafeAreaView>
      </Background>
    </IconComponentProvider>
  );
}
