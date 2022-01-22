import React from 'react';
import { Wrapper, Header } from './styled';
//import { View, Text } from 'react-native';
import Button from '../../../../components/Button';
import { colors } from '../../../../styles';

const FlightPlanFirst = ({navigation}) => {
  return (
    <Wrapper>
      <Header style={{fontSize: 40}}>Primera pantalla</Header>
      <Button
        backgroundColor={colors.black}
        text="Siguiente"
        textColor={colors.white}
        fontSize={16}
        borderColor={colors.black}
        isDisabled={false}
        onPress={() => navigation.navigate("FlightPlanSecond")}
      /> 
    </Wrapper>

  )
};

export default FlightPlanFirst;