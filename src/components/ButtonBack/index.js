import {useNavigation} from '@react-navigation/native';
import IconArrow from '../../assets/icons/nav-arrow-left.svg';

import React from 'react';
import {TouchableOpacity, View} from 'react-native';

export function ButtonBack() {
  const navigation = useNavigation();
  function handleGoBack() {
    navigation.goBack();
  }
  return (
    <View>
      <TouchableOpacity onPress={handleGoBack}>
        <IconArrow fill="white" width={30} height={30} />
      </TouchableOpacity>
    </View>
  );
}
