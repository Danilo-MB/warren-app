import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Image, StyleSheet } from 'react-native';
import Logo from '../../commons/images/Logo/logo.png';
import { MainWrapper, LogoSection, TextSection, StyledText, InputSection, ButtonSection } from './styled';
import Input from '../../components/Input';
import MailIcon from '../../commons/icons/Mail';
import { colors } from '../../styles';
import Button from '../../components/Button';
import { login, getUser } from '../../stores/session/actions';
import { getUserId, getUserObject } from '../../stores/session/selectors';
import axios from 'axios';

const emailPattern = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

const LoginScreen = ({navigation}) => { 

  const dispatch = useDispatch();

  const [form, setForm] = useState({email: 'danilo@gmail.com'});
  const [errorForm, setErrorForm] = useState('');

  const { email } = form;
  const { error } = errorForm;

  const handleChange = (name, value) => {
    setForm({
      ...form,
      [name]: value
    });
    setErrorForm('');
  };

  const hasErrors = () => {
    const mailFormat = emailPattern.test(email);
    if (!mailFormat || email.length === 0) {
      setErrorForm({error: 'Debe ingresar un email valido.'});
      return true;
    }
    return false;
  };

  const userId = useSelector(getUserId);

  useEffect(() => {
    if(userId) {
      dispatch(getUser(userId));
      navigation.navigate("HomeStack");
    }else {
      return
    };
  }, [userId]);

  const onLogin = async () => {
    if (hasErrors()) return;
    dispatch(login(email));
  };

  return (
    <MainWrapper>
      <LogoSection>
        <Image source={Logo} style={styles.image} />
      </LogoSection>
      <TextSection>
        <StyledText>Ingrese su email para comenzar</StyledText>
      </TextSection>
      <InputSection>
      <Input
        leftIcon={
          <MailIcon
            color={error ? colors.red : colors.black}
            width={22}
            height={20}
          />
          }
          placeholder="Ingrese su email"
          label="Email"
          name="email"
          value={email}
          onChange={handleChange}
          errorMessage={error}
        />
      </InputSection>
      <ButtonSection>
        <Button
          backgroundColor={colors.black}
          text="Ingresar"
          textColor={colors.white}
          fontSize={16}
          borderColor={colors.black}
          marginLeft={20}
          marginRight={20}
          onPress={onLogin}
        />
      </ButtonSection>
    </MainWrapper>
  )
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  }
});

export default LoginScreen;