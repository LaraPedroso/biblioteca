import React from 'react';
import {Image, Text, TextInput, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Background} from '../../components/Background';
import {styles} from './styles';
import logoImg from '../../assets/logoBook3.png';

import {ButtonBack} from '../../components/ButtonBack';
export function Register() {
  return (
    <Background>
      <SafeAreaView>
        <View>
          <ButtonBack />
        </View>
        <View style={styles.container}>
          <Image source={logoImg} style={styles.logo} />
          <Text>Register</Text>
          <TextInput placeholder="Name" />
        </View>
      </SafeAreaView>
    </Background>
  );
}
