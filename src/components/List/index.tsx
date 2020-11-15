import React from 'react';

import { Container, Category, Title, Icon, Line } from './styles';

interface ListProps {
  selected: boolean;
  special?: boolean;
  onPress(): void;
}

const List: React.FC<ListProps> = ({
  children,
  special = false,
  selected = false,
  onPress,
}) => {
  return (
    <Container onPress={onPress}>
      <Category>
        <Title special={special} selected={selected}>
          {children}
        </Title>
        <Icon selected={selected} />
      </Category>
      <Line />
    </Container>
  );
};

export default List;
