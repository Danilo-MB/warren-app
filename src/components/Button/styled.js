import styled from 'styled-components';
import { View, Text, TouchableOpacity } from 'react-native';
import { colors } from '../../styles';

export const Wrapper = styled(TouchableOpacity)`
  display: flex;
  height: ${props => (props.height ? `${props.height}px` : '47px')};
  margin-left: ${props => (props.marginLeft ? `${props.marginLeft}px` : '0px')}
  margin-right: ${props =>
    props.marginRight ? `${props.marginRight}px` : '0px'}
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: ${props =>
    props.borderColor ? `1px solid ${props.borderColor}` : '0 solid white'};
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : colors.white};
  box-shadow: 0px 0px 4px ${props =>
    props.shadowColor ? props.shadowColor : 'transparent'};
  elevation: ${props => (props.shadowElevation ? props.shadowElevation : 0)};
`;
export const LeftIconContainer = styled(View)`
  padding-right: 10px;
`;
export const TextContainer = styled(View)`
  flex-direction: row;
  align-items: center;
`;
export const StyledText = styled(Text)`
  font-size: ${props => (props.fontSize ? `${props.fontSize}px` : '14px')};
  color: ${props => (props.textColor ? props.textColor : colors.black)};
  font-weight: 700;
`;
