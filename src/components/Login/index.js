import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Background} from '../../components/Background';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';

export function Home() {
  const navigation = useNavigation();

  return (
    <Background>
      <SafeAreaView style={styles.container}></SafeAreaView>
    </Background>
  );
}
