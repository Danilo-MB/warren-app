import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Image, StyleSheet } from 'react-native';
import { 
  MainWrapper, 
  Wrapper, 
  LogoSection, 
  TitleSection, 
  Title, 
  AdviceSection, 
  IconSection, 
  Paragraph,
  ButtonSection,
  DisclaimerSection,
  DisclaimerText
} from './styled';
import Button from '../../components/Button';
import Logo from '../../commons/images/Logo/logo.png'
import { Icon, CheckBox } from 'react-native-elements';
import { colors } from '../../styles';
import { acceptTerms } from '../../stores/session/actions';
 
const WelcomeScreen = ({navigation}) => {

  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);

  const handlePress = () => {
    dispatch(acceptTerms());
    navigation.navigate("LoginScreen");
  };

  return (
    <MainWrapper>
      <Wrapper>
        <LogoSection>
          <Image source={Logo} style={styles.image} />
        </LogoSection>
        <TitleSection>
          <Title>Revisa los siguientes consejos antes de comenzar:</Title>
        </TitleSection>
        <AdviceSection>
          <IconSection>
            <Icon 
              name='plane'
              type='font-awesome'
              size={30} 
              color={colors.black} 
            />
          </IconSection>
          <Paragraph>No uses la app en momentos criticos</Paragraph>
        </AdviceSection>
        <AdviceSection>
          <IconSection>
            <Icon 
              name='warning'
              type='font-awesome'
              size={30} 
              color={colors.black} 
            />
          </IconSection>
          <Paragraph>No toques nada que tenga este cartel</Paragraph>
        </AdviceSection>
        <AdviceSection>
          <IconSection>
            <Icon 
              name='heartbeat'
              type='font-awesome'
              size={30} 
              color={colors.black} 
            />
          </IconSection>
          <Paragraph>Anda seguido al cardiologo, no seas jeropa</Paragraph>
        </AdviceSection>
        <AdviceSection>
          <IconSection>
            <Icon 
              name='home'
              type='font-awesome'
              size={30} 
              color={colors.black} 
            />
          </IconSection>
          <Paragraph>Algo de una casita</Paragraph>
        </AdviceSection>
        <DisclaimerSection>
          <CheckBox 
            checked={checked}
            containerStyle={{ padding: 0, width: "5%" }}
            checkedColor={colors.green}
            onIconPress={() => setChecked(!checked)}
          />
          <DisclaimerText>Acepto el consejo amigo</DisclaimerText>
        </DisclaimerSection>
        <ButtonSection>
          <Button
            backgroundColor={colors.black}
            text="Ingresar"
            textColor={colors.white}
            fontSize={16}
            borderColor={colors.black}
            isDisabled={!checked}
            onPress={handlePress}
          />   
        </ButtonSection>
      </Wrapper>
    </MainWrapper>
    
  )
}; 

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  }
});

export default WelcomeScreen;