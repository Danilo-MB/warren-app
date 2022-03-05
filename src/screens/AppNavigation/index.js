import React, { useEffect } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import LoginScreen from '../Login';
import HomeStack from '../Home';
import WelcomeScreen from '../Welcome';
import FlightPlanStack from '../FlightPlan';
import PilotProfile from '../PilotProfile';
import { getUserId, termsAccepted, getUserObject } from '../../stores/session/selectors'; 
import { colors } from '../../styles';
import Badge from '../../components/Badge';

const Stack = createStackNavigator();

const AppNavigation = () => {

  const userId = useSelector(getUserId);
  const isTermsAccepted = useSelector(termsAccepted);
  const user = useSelector(getUserObject);
  
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
          name="PilotProfile"
          title=""
          component={PilotProfile}
        />
        <Stack.Screen
          name="WelcomeScreen"
          title=""
          component={WelcomeScreen}
        />
        <Stack.Screen
          name="LoginScreen"
          title=""
          component={LoginScreen}
        />
        <Stack.Screen
          name="HomeStack"
          title=""
          component={HomeStack}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="FlightPlan"
          title=""
          component={FlightPlanStack}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default AppNavigation;