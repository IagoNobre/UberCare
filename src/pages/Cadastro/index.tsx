import React, { useCallback, useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import { KeyboardAvoidingView } from 'react-native';
import Header from '../../components/Header';
import Title from '../../components/Title';

import ArrowRight from '../../assets/arrowright.svg';

import {
  Container,
  CategoryContainer,
  SimpleButton,
  ButtonText,
  SimpleButtonDisable,
  InputArea,
  ContainerInput,
  TitleInput,
} from './styles';

const Categoria: React.FC = () => {
  const [complete, setComplete] = useState(false);
  const { navigate } = useNavigation();

  const handleNavigateToCategoria = useCallback(() => {
    navigate('Categoria');
  }, [navigate]);

  return (
    <Container>
      <Header />
      <Title>
        Cadastre um
        {' \n'}
        paciente:
      </Title>
      <CategoryContainer>
        <KeyboardAvoidingView behavior="position" style={{ flex: 1 }}>
          <InputArea style={{ marginTop: 0 }}>
            <TitleInput>Telefone do Paciente</TitleInput>
            <ContainerInput placeholder="Buscar pelo Uber" />
          </InputArea>
          <InputArea>
            <TitleInput>Nome do Paciente</TitleInput>
            <ContainerInput placeholder="Buscar pelo Uber" />
          </InputArea>
          {complete ? (
            <SimpleButtonDisable>
              <ButtonText>Cadastrar</ButtonText>
              <ArrowRight style={{ position: 'absolute', right: '5%' }} />
            </SimpleButtonDisable>
          ) : (
            <SimpleButton onPress={handleNavigateToCategoria}>
              <ButtonText>Cadastrar</ButtonText>
              <ArrowRight style={{ position: 'absolute', right: '5%' }} />
            </SimpleButton>
          )}
        </KeyboardAvoidingView>
      </CategoryContainer>
    </Container>
  );
};

export default Categoria;
