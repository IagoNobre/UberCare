import React from 'react';

import ArrowRight from '../../assets/arrowright.svg';
import UberCare from '../../assets/logomini.svg';

import { Container, Title, Content, Action, TextAction } from './styles';

interface AlertProps {
  title: string;
  action: string;
  top: number;
}

const Alert: React.FC<AlertProps> = ({ title, action, children, top }) => {
  return (
    <Container top={top}>
      <Title>{title}</Title>
      <Content>{children}</Content>
      <Action>
        <TextAction>{action}</TextAction>
        <ArrowRight width="20" style={{ marginLeft: 4 }} />
        <UberCare style={{ position: 'absolute', right: '4%' }} />
      </Action>
    </Container>
  );
};

export default Alert;
