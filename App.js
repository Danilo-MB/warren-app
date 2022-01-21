import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/stores/configureStore';
import { SafeAreaView, StatusBar } from 'react-native';
import AppNavigation from './src/screens/AppNavigation';
import { colors } from './src/styles';

const initialState = {};
const store = configureStore(initialState);

const App = () => {

  return (
    <Provider store={store}>
      <StatusBar barStyle='dark-content' />
      <SafeAreaView style={{flex: 1}}>
        <StatusBar translucent backgroundColor={colors.white} />
        <AppNavigation />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
