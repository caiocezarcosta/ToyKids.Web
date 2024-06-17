import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes';
import { AuthProvider } from './src/context/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <StatusBar backgroundColor="#050107" barStyle="light-content"/> 

        <Routes/>
      </NavigationContainer>
    </AuthProvider>
  );
}

//Em StatusBar mudar a backgroundColor para cor da empresa