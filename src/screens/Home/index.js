import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { MainWrapper, Wrapper, HeaderSection, Header } from './styled';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import Card from '../../components/Card';
import Badge from '../../components/Badge';
import { colors } from '../../styles';
import { Icon } from 'react-native-elements';
import { getUserObject } from '../../stores/session/selectors';

const HomeStack = () => {

  const Stack = createStackNavigator();
  const user = useSelector(getUserObject);

  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="HomeScreen"
        title="Home Screen"
        component={HomeScreen}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          title: `PIloto: ${user.firstName}`,
          headerLeft: () => (
            <TouchableOpacity
              style={styles.headerLeft}
            >
              <Badge
                width={30}
                backgroundColor={colors.white}
                isAddContact={false}
                fontSize={16}
                text={`${user?.firstName?.charAt(0)}${user?.lastName?.charAt(0)}`}
              />
            </TouchableOpacity>   
          ),
          headerStyle: { backgroundColor: colors.black2 },
          headerTintColor: colors.white,
          headerTitleStyle: {fontSize: 14}
        }}
      />
    </Stack.Navigator>
  );

};

const HomeScreen = ({navigation}) => {
  
  return (
    <MainWrapper>
      <Wrapper>
        <HeaderSection>
          <Header>Seleccione una operacion:</Header>
        </HeaderSection>
        <Card 
          onPress={() => navigation.navigate("FlightPlan")}
          icon={
            <Icon 
              name='plane'
              type='font-awesome'
              size={100} color={colors.white} 
            />}          
          header="Plan de Vuelo"
        />
        <Card 
          onPress={() => {}}
          icon={
            <Icon 
              name='plane'
              type='font-awesome'
              size={100} color={colors.white} 
            />}          
          header="Plan de Vuelo"
        />
      </Wrapper>
    </MainWrapper>
  )
};

const styles = StyleSheet.create({
  headerLeft: {
    marginLeft: 20,
  },
});

export default HomeStack;