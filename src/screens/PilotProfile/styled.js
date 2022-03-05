import styled from 'styled-components';
import { View, Text } from 'react-native';
import { colors } from '../../styles';

export const MainWrapper = styled(View)`
  display: flex;
  height: 100%;
  flex-direction: column;
  background-color: ${colors.black2};
  padding-top: 30px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const PictureWrapper = styled(View)`
  align-items: center;
  height: 30%;
  padding-top: 30px;
  padding-bottom: 30px;

`;

export const InformationWrapper = styled(View)`
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  height: 70%;
  padding-top: 30px;
  padding-bottom: 30px;

`;