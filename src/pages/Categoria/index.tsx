import React, { useCallback, useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import Header from '../../components/Header';
import List from '../../components/List';
import Title from '../../components/Title';

import HeartIcon from '../../assets/heart.svg';
import ArrowRight from '../../assets/arrowright.svg';

import {
  Container,
  CategoryContainer,
  SimpleButton,
  ButtonText,
  SimpleButtonDisable,
} from './styles';

const Categoria: React.FC = () => {
  const [list, setList] = useState(0);
  const { navigate } = useNavigation();

  const handleNavigateToLocalCare = useCallback(() => {
    navigate('LocalCare');
  }, [navigate]);

  return (
    <Container>
      <Header />
      <Title>
        Selecione uma
        {' \n'}
        categoria abaixo:
      </Title>
      <CategoryContainer>
        <List special onPress={() => setList(1)} selected={list === 1}>
          Covid-19
        </List>
        <List onPress={() => setList(2)} selected={list === 2}>
          Cardíaco
        </List>
        <List onPress={() => setList(3)} selected={list === 3}>
          Respiratório
        </List>
        <List onPress={() => setList(4)} selected={list === 4}>
          Lesão
        </List>
        <List onPress={() => setList(5)} selected={list === 5}>
          Outro
        </List>

        {list === 0 ? (
          <SimpleButtonDisable>
            <HeartIcon style={{ marginRight: 4 }} />
            <ButtonText>Confirmar UberCare</ButtonText>
            <ArrowRight style={{ marginLeft: 22 }} />
          </SimpleButtonDisable>
        ) : (
          <SimpleButton onPress={handleNavigateToLocalCare}>
            <HeartIcon style={{ marginRight: 4 }} />
            <ButtonText>Confirmar UberCare</ButtonText>
            <ArrowRight style={{ marginLeft: 22 }} />
          </SimpleButton>
        )}
      </CategoryContainer>
    </Container>
  );
};

export default Categoria;
