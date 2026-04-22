import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import MainNavigator from './MainNavigator';
import { navigationRef } from '../utils/NavigationUtil';
import { Colors } from '../constants/Colors';

const Navigation = () => {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: Colors.background,
      text: Colors.text,
      border: Colors.border,
      card: Colors.card,
      notification: Colors.notification_card,
      primary: Colors.themeColor,
    },
  };
  return (
    <NavigationContainer ref={navigationRef} theme={MyTheme}>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
