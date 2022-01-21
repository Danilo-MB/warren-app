import styled from 'styled-components';
import { Input } from 'react-native-elements';
import { colors } from '../../styles';

export const StyledInput = styled(Input).attrs({
  textAlign: 'left',
  color: colors.black,
  fontSize: 15,
  lineSpacing: 23,
  containerStyle: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  inputContainerStyle: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.black,
    backgroundColor: colors.gray3,
    paddingLeft: 8,
  },
  labelStyle: {
    color: colors.black,
    fontSize: 15,
    marginBottom: 10,
  },
})``;