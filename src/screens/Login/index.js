import React, {useEffect, useState} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Animated,
} from 'react-native';
import {Background} from '../../components/Background';
import {styles} from './styles';
import logoImg from '../../assets/logoBook3.png';

// import {ButtonBack} from '../../components/ButtonBack';
export function Login() {
  const [offset] = useState(new Animated.ValueXY({x: 0, y: 80}));

  useEffect(() => {
    Animated.spring(offset.y, {
      toValue: 0,
      speed: 4,
      bounciness: 30,
      useNativeDriver: true,
    }).start();
  });
  return (
    <Background>
      {/* <View style={styles.btnBack}>
        <ButtonBack />
      </View> */}
      <KeyboardAvoidingView style={styles.background}>
        <View style={styles.logo}>
          <Image source={logoImg} />
        </View>
        <Animated.View
          style={[styles.container, {transform: [{translateY: offset.y}]}]}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            autoCorrect={false}
            onChangeText={() => {}}
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            autoCorrect={false}
            onChangeText={() => {}}
          />
          <TouchableOpacity style={styles.btnSubmit}>
            <Text style={styles.btntext}>Acessar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnRegister}>
            <Text style={styles.textRegister}>Registrar-se</Text>
          </TouchableOpacity>
        </Animated.View>
      </KeyboardAvoidingView>
    </Background>
  );
}
