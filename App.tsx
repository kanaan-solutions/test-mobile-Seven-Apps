import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import Routes from './src/routes/';
import store from './src/store';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
        <StatusBar style="light" />
      </Provider>
    </>
);  
}