import styled from 'styled-components';
import { ScrollView, View, Text } from 'react-native';
import { colors } from '../../styles';

export const MainWrapper = styled(ScrollView)`
  background-color: ${colors.black2};
`;

export const Wrapper = styled(View)`
  flex-direction: row;
  padding-left: 10px;
  padding-top: 10px;
  padding-right: 10px;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderSection = styled(View)`
  width: 100%;
  margin-bottom: 25px;
  margin-left: 10px;
`;

export const Header = styled(Text)`
  font-size: 18px;
  color: ${colors.white};
  font-weight: bold;
`; 