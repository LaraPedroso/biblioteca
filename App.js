import React from 'react';
import {StatusBar} from 'react-native';
import {Background} from './src/components/Background';
import {Loading} from './src/components/Loading';
import {Routes} from './src/routes';
// import {IconComponentProvider} from '@react-native-material/core';
// import Entypo from 'react-native-vector-icons/Entypo';
const App = () => {
  return (
    // <IconComponentProvider IconComponent={Entypo}>
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {<StatusBar /> ? <Routes /> : <Loading />}
    </Background>
    // </IconComponentProvider>
  );
};

export default App;
