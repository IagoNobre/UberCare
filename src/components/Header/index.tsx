import React, { useCallback } from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import ArrowLeft from '../../assets/arrowleft.svg';
import Uber from '../../assets/uber.svg';

import { Container } from './styles';

const Header: React.FC = () => {
  const { goBack } = useNavigation();

  const handleGoBack = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <Container>
      <BorderlessButton onPress={handleGoBack}>
        <ArrowLeft width={22} style={{ marginRight: 18 }} />
      </BorderlessButton>
      <Uber width={60} />
    </Container>
  );
};

export default Header;
