import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Wrapper, LeftIconContainer, TextContainer, StyledText } from './styled';
import { colors } from '../../styles';

const Button = props => {
  const {
    backgroundColor,
    text,
    textColor,
    leftIcon,
    onPress,
    borderColor,
    fontSize,
    fontStyle,
    shadowColor,
    shadowElevation,
    marginLeft,
    marginRight,
    isDisabled = false,
    loading = false,
    height,
  } = props;

  const getText = () => {
    return loading ? (
      <ActivityIndicator size="large" color={colors.white} />
    ) : (
      <StyledText
        textColor={textColor}
        fontSize={fontSize}
        fontStyle={fontStyle}>
        {text}
      </StyledText>
    );
  };

  const disabled = isDisabled || loading;

  return (
    <Wrapper
      height={height}
      backgroundColor={backgroundColor}
      onPress={onPress}
      borderColor={borderColor}
      shadowColor={shadowColor}
      shadowElevation={shadowElevation}
      marginLeft={marginLeft}
      marginRight={marginRight}
      isDisabled={isDisabled}
      disabled={disabled}>
      <TextContainer>
        {leftIcon && <LeftIconContainer>{leftIcon}</LeftIconContainer>}
        {getText()}
      </TextContainer>
    </Wrapper>
  );
};

export default Button;