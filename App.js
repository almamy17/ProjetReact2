import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { MyNavigation } from './navigation/myNavigation';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/configureStore';


export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar style="auto"/>
          <NavigationContainer>
            <MyNavigation style={{backgroundColor:'white'}}/>   
          </NavigationContainer>
        </PersistGate>
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //margin:20,
    backgroundColor: 'white',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
