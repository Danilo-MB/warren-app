import React from 'react';
import { StyledInput } from './styled';

const Input = props => {
  const {
    value,
    onChange,
    name,
    leftIcon,
    rightIcon,
    label,
    hideValue,
    errorMessage,
    onSubmitEditing = () => {},
    placeholder,
  } = props;

  return (
    <StyledInput
      value={value}
      onChangeText={text => onChange(name, text)}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      label={label}
      secureTextEntry={hideValue}
      errorMessage={errorMessage}
      onSubmitEditing={onSubmitEditing}
      placeholder={placeholder}
    />
  );
};

export default Input;