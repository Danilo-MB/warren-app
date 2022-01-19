import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import AppNavigation from './src/screens/AppNavigation';

const App = () => {

  return (
    <SafeAreaView>
      <StatusBar barStyle='light-content' />
      <AppNavigation />
    </SafeAreaView>
  );
};

export default App;
