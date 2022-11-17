import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Background} from '../../components/Background';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import {Image, Text, TextInput, TouchableOpacity} from 'react-native';
import logoImg from '../../assets/logoBook3.png';

export function Login() {
  const navigation = useNavigation();
  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Background>
      <TouchableOpacity onPress={handleGoBack}>
        {/* <Icon name="arrow-left" size={60} color="white" /> */}
        <Text>Voltar</Text>
      </TouchableOpacity>

      <SafeAreaView style={styles.container}>
        <Image source={logoImg} style={styles.logo} />
        <TextInput placeholder="Name" />
      </SafeAreaView>
    </Background>
  );
}
