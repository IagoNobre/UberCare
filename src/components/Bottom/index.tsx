import React from 'react';

import { Container, BottomIcon } from './styles';

interface BottomProps {
  height: number;
}

const Bottom: React.FC<BottomProps> = ({ height, children }) => {
  return (
    <Container height={height}>
      <BottomIcon />
      {children}
    </Container>
  );
};

export default Bottom;
