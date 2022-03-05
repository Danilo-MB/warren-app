import React from 'react';
import { Wrapper, HeaderSection, Header, IconSection } from './styled';

const Card = (props) => {

  const { width, height, fontSize, onPress, header, icon } = props;

  return (
    <Wrapper
      onPress={onPress}
      width={width}
      height={height}
    >
      <HeaderSection>
        <Header
          fontSize={fontSize}
        >
          {header}
        </Header>
      </HeaderSection>
      <IconSection>
        {icon}
      </IconSection>
    </Wrapper>
  );

};

export default Card;