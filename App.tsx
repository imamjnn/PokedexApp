/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {AppNavigation} from '@navigation/AppNavigation';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
};

export default App;
