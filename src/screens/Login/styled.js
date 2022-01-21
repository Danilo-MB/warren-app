import styled from 'styled-components';
import { colors } from '../../styles';
import { View, Text } from 'react-native';

export const MainWrapper = styled(View)`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${colors.white};
`;

export const LogoSection = styled(View)`
  align-items: center;
  margin-top: 70px;
`;

export const TextSection = styled(View)`
  padding-left: 20px;
  padding-top: 30px;
  padding-right: 20px;
  align-items: center;
`;

export const StyledText = styled(Text)`
  font-size: 19px;
  font-weight: bold;
`;

export const InputSection = styled(View)`
  padding-left: 20px;
  padding-top: 80px;
  padding-right: 20px;
`;

export const ButtonSection = styled(View)`
  padding-top: 50px;
`;