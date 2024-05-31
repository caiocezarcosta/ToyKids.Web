import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#050107" barStyle="light-content"/> 

      <Routes/>
    </NavigationContainer>
  );
}

//Em StatusBar mudar a backgroundColor para cor da empresa