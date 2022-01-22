import React from 'react';
import { useSelector } from 'react-redux';
import { MainWrapper, Wrapper, HeaderSection, Header } from './styled';
import Card from '../../components/Card';
import { colors } from '../../styles';
import { Icon } from 'react-native-elements';
import { getEmail } from '../../stores/session/selectors';

const HomeScreen = ({navigation}) => {

  const userEmail = useSelector(getEmail);

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
          onPress={() => {console.log('Card press')}}
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

export default HomeScreen;