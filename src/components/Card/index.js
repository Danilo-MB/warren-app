import React from 'react';
import { Wrapper, HeaderSection, Header, IconSection } from './styled';

const Card = (props) => {

  const { onPress, header, icon } = props;

  return (
    <Wrapper
      onPress={onPress}
    >
      <HeaderSection>
        <Header>{header}</Header>
      </HeaderSection>
      <IconSection>
        {icon}
      </IconSection>
    </Wrapper>
  );

};

export default Card;