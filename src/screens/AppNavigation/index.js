import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import LoginScreen from '../Login';
import HomeScreen from '../Home';
import { getEmail } from '../../stores/session/selectors'; 
import { colors } from '../../styles';
import Badge from '../../components/Badge';

const Stack = createStackNavigator();

const AppNavigation = () => {

  const userEmail = useSelector(getEmail);

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
          name="LoginScreen"
          title=""
          component={LoginScreen}
        />
        <Stack.Screen
          name="HomeScreen"
          title=""
          component={HomeScreen}
          options={{
            headerShown: true,
            headerTitleAlign: 'center',
            title: `Usuario: ${userEmail}`,
            headerLeft: () => (
              <TouchableOpacity
                style={styles.headerLeft}
              >
                <Badge
                  width={30}
                  backgroundColor={colors.white}
                  isAddContact={false}
                  fontSize={18}
                  text="PI"
                />
              </TouchableOpacity>   
            ),
            headerStyle: { backgroundColor: colors.black2 },
            headerTintColor: colors.white,
            headerTitleStyle: {fontSize: 14}
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

const styles = StyleSheet.create({
  headerLeft: {
    marginLeft: 20,
  },
});

export default AppNavigation;