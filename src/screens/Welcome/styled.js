import styled from 'styled-components';
import { ScrollView, View, Text } from 'react-native';
import { colors } from '../../styles';

export const MainWrapper = styled(ScrollView)`
  background-color: ${colors.white};
`;

export const Wrapper = styled(View)`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-left: 20px;
  padding-top: 20px;
  padding-right: 20px;
  align-items: center;
`;

export const LogoSection = styled(View)`
  align-items: center;
  margin-top: 70px;
  margin-bottom: 30px;
`;

export const TitleSection = styled(View)`
  margin-bottom: 30px; 

`;

export const Title = styled(Text)`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.black};
  text-align: center;
`;

export const AdviceSection = styled(View)`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

export const IconSection = styled(View)`
  margin-right: 10px;
`;

export const Paragraph = styled(Text)`
  font-size: 18px;
  color: ${colors.black};
`;

export const DisclaimerSection = styled(View)`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
`;

export const DisclaimerText = styled(Text)`
  font-size: 14px;
  color: ${colors.black};
`;

export const ButtonSection = styled(View)`
  width: 100%;
  padding-top: 20px;
`;