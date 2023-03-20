/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {AppNavigation} from '@navigation/AppNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {RecoilRoot} from 'recoil';

const App = () => {
  return (
    <NavigationContainer>
      <RecoilRoot>
        <AppNavigation />
      </RecoilRoot>
    </NavigationContainer>
  );
};

export default App;
