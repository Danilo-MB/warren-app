import React from 'react';
import { StyleSheet } from 'react-native';
import { colors } from '../../styles';
import { Wrapper, Words } from './styled';

const Badge = props => {
  const {
    width,
    backgroundColor,
    fontSize,
    text,
  } = props;

  return (
    <Wrapper width={width} backgroundColor={backgroundColor}>
      <Words style={styles.badgeText} fontSize={fontSize} text={text}>
        {text}
      </Words>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  badgeText: {
    color: colors.black2,
  },
});

export default Badge;