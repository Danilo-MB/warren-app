import styled from 'styled-components';
import { View, Text } from 'react-native';

export const Wrapper = styled(View)`
  background-color: ${props => props.backgroundColor};
  width: ${props => props.width}px;
  height: ${props => props.width}px;
  border-radius: ${props => props.width}px;
  align-items: center;
  justify-content: center;
`;

export const Words = styled(Text)`
  font-size: ${props => props.fontSize}px;
`;