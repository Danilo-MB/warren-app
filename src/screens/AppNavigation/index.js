import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import HomeScreen from '../Home';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          headerShown: false,
          unmountOnBlur: true,
        }}>
        <Stack.Screen
          name="HomeScreen"
          title=""
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default AppNavigation;