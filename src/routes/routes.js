import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../screens/Home';
import {Book} from '../screens/Book';
import {Login} from '../screens/Login';
import {PagesRead} from '../screens/PagesRead';
import {Register} from '../screens/Register';

const {Navigator, Screen} = createNativeStackNavigator();
export function AppRoutes() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="home" component={Home} />
      <Screen name="book" component={Book} />
      <Screen name="login" component={Login} />
      <Screen name="register" component={Register} />
      <Screen name="pagesread" component={PagesRead} />
    </Navigator>
  );
}
