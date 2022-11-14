import React from 'react';
import {ImageBackground} from 'react-native';
import bgImg from '../../assets/background-galaxy.png';

import {styles} from './style';

export function Background({children}) {
  return (
    <>
      <ImageBackground
        style={styles.container}
        source={bgImg}
        defaultSource={bgImg}>
        {children}
      </ImageBackground>
    </>
  );
}
