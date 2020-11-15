import React, { useCallback } from 'react';

import { useNavigation } from '@react-navigation/native';
import CareImage from '../../assets/juliana.svg';

import Header from '../../components/Header';
import Title from '../../components/Title';
import Bottom from '../../components/Bottom';

import { Container, SimpleButton, ButtonText } from './styles';

const Care: React.FC = () => {
  const { navigate } = useNavigation();

  const handleNavigateToCategoria = useCallback(() => {
    navigate('Categoria');
  }, [navigate]);

  const handleNavigateToCadastro = useCallback(() => {
    navigate('Cadastro');
  }, [navigate]);

  return (
    <>
      <Container>
        <Header />
        <Title>Para quem é o atendimento?</Title>
        <CareImage width={358} style={{ marginTop: 10 }} />
        <Bottom height={218}>
          <SimpleButton onPress={handleNavigateToCategoria}>
            <ButtonText>Para mim</ButtonText>
          </SimpleButton>
          <SimpleButton onPress={handleNavigateToCadastro}>
            <ButtonText>Para outra pessoa</ButtonText>
          </SimpleButton>
        </Bottom>
      </Container>
    </>
  );
};

export default Care;
