import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import FlightPlanFirst from './components/FirstScreen';
import FlightPlanSecond from './components/SecondScreen';

const Stack = createStackNavigator();

const FlightPlanStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        headerShown: false,
        unmountOnBlur: true,
      }}>
      <Stack.Screen
        name="FlightPlanFirst"
        title=""
        component={FlightPlanFirst}
      />
      <Stack.Screen
        name="FlightPlanSecond"
        title=""
        component={FlightPlanSecond}
      />
    </Stack.Navigator>
  )
};

export default FlightPlanStack;