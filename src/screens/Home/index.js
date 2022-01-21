import React from 'react';
import { useSelector } from 'react-redux';
import { MainWrapper, Wrapper, HeaderSection, Header } from './styled';
import Card from '../../components/Card';
import EmailIcon from '../../commons/icons/Mail';
import { colors } from '../../styles';
import { Icon } from 'react-native-elements';
import { getEmail } from '../../stores/session/selectors';

const HomeScreen = () => {

  const userEmail = useSelector(getEmail);

  return (
    <MainWrapper>
      <Wrapper>
        <HeaderSection>
          <Header>Seleccione una operacion:</Header>
        </HeaderSection>
        <Card 
          onPress={() => {console.log('Card press')}}
          icon={<EmailIcon width={30} height={20} color={colors.white} />}          header="Plan de Vuelo"
        />
        <Card 
          onPress={() => {console.log('Card press')}}
          icon={<EmailIcon width={30} height={20} color={colors.white} />}
          header="Header del Card"
        />
        <Card 
          onPress={() => {console.log('Card press')}}
          icon={<EmailIcon width={30} height={20} color={colors.white} />}
          header="Header del Card"
        />
        <Card 
          onPress={() => {console.log('Card press')}}
          icon={<EmailIcon width={30} height={20} color={colors.white} />}
          header="Header del Card"
        />
        <Card 
          onPress={() => {console.log('Card press')}}
          icon={<EmailIcon width={30} height={20} color={colors.white} />}
          header="Header del Card"
        />
        <Card 
          onPress={() => {console.log('Card press')}}
          icon={<EmailIcon width={30} height={20} color={colors.white} />}
          header="Header del Card"
        />
      </Wrapper>
    </MainWrapper>
  )
};

export default HomeScreen;