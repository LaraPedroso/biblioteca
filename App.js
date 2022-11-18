import React from 'react';
import {StatusBar} from 'react-native';
import {Background} from './src/components/Background';
import {Loading} from './src/components/Loading';
import {Routes} from './src/routes';
const App = () => {
  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {<StatusBar /> ? <Routes /> : <Loading />}
    </Background>
  );
};

export default App;
