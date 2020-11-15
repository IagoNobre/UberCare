import React from 'react';

import { Container, TitleText } from './styles';

interface TitleProps {
  children: string | string[];
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <Container>
      <TitleText>{children}</TitleText>
    </Container>
  );
};

export default Title;
