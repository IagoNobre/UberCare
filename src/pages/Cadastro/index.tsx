import React, { useCallback, useState, useRef } from 'react';

import { useNavigation } from '@react-navigation/native';

import { KeyboardAvoidingView } from 'react-native';
import Header from '../../components/Header';
import Title from '../../components/Title';

import ArrowRight from '../../assets/arrowright.svg';
import PickerIcon from '../../assets/miniarrowdown.svg';

import {
  Container,
  CategoryContainer,
  SimpleButton,
  ButtonText,
  SimpleButtonDisable,
  InputArea,
  ContainerInput,
  TitleInput,
  Recommend,
  RecommendPicker,
  TextRecommend,
  NumberRecommend,
  PickerContainer,
  PickerArea,
  PickerText,
  PickerOption,
  Picker,
} from './styles';

const Categoria: React.FC = () => {
  const [nameFocus, setNameFocus] = useState(false);
  const [numberFocus, setNumberFocus] = useState(false);
  const [openOptionsSexo, setOpenOptionsSexo] = useState(false);
  const [openOptionsIdade, setOpenOptionsIdade] = useState(false);
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [sexo, setSexo] = useState('');
  const [idade, setIdade] = useState('');
  const { navigate } = useNavigation();

  const handleNavigateToCategoria = useCallback(() => {
    navigate('Categoria');
  }, [navigate]);

  const handleCompleteForm = useCallback(() => {
    setNumber('(84) 8498-5522');
    setName('Iago Nobre Silva');
    setSexo('Masculino');
    setIdade('16 anos');
  }, []);

  const handleOpenOptionsIdade = useCallback(() => {
    setOpenOptionsIdade(!openOptionsIdade);
  }, [openOptionsIdade]);

  const handleOpenOptionsSexo = useCallback(() => {
    setOpenOptionsSexo(!openOptionsSexo);
  }, [openOptionsSexo]);

  return (
    <>
      <Header />
      <Container>
        <Title>
          Cadastre um
          {' \n'}
          paciente:
        </Title>
        <CategoryContainer>
          <KeyboardAvoidingView behavior="position" style={{ flex: 1 }}>
            <InputArea style={{ marginTop: 0 }}>
              <TitleInput>Telefone do Paciente</TitleInput>
              <ContainerInput
                focused={numberFocus}
                onFocus={() => setNumberFocus(true)}
                onBlur={() => setNumberFocus(false)}
                onChangeText={setNumber}
                value={number}
                placeholder="Buscar pelo Uber"
              />
              {number === '8' && (
                <>
                  <Recommend onPress={handleCompleteForm}>
                    <TextRecommend>Iago Nobre Silva</TextRecommend>
                    <NumberRecommend>(84) 8498-5522</NumberRecommend>
                  </Recommend>
                  <Recommend>
                    <TextRecommend>Maria Eduarda Lima da Luz</TextRecommend>
                    <NumberRecommend>(84) 8002-8922</NumberRecommend>
                  </Recommend>
                </>
              )}
            </InputArea>
            <InputArea>
              <TitleInput>Nome do Paciente</TitleInput>
              <ContainerInput
                onFocus={() => setNameFocus(true)}
                onBlur={() => setNameFocus(false)}
                focused={nameFocus}
                value={name}
                onChangeText={setName}
                placeholder="Nome do Paciente"
              />
            </InputArea>
            <PickerContainer>
              <PickerArea>
                <PickerText>Sexo</PickerText>
                <Picker onPress={handleOpenOptionsSexo}>
                  <PickerOption>{sexo || 'Selecione'}</PickerOption>
                  <PickerIcon />
                </Picker>
                {openOptionsSexo && (
                  <>
                    <RecommendPicker
                      onPress={() => {
                        setSexo('Feminino');
                        setOpenOptionsSexo(false);
                      }}
                    >
                      <TextRecommend>Feminino</TextRecommend>
                    </RecommendPicker>
                    <RecommendPicker
                      onPress={() => {
                        setSexo('Masculino');
                        setOpenOptionsSexo(false);
                      }}
                    >
                      <TextRecommend>Masculino</TextRecommend>
                    </RecommendPicker>
                  </>
                )}
              </PickerArea>
              <PickerArea>
                <PickerText>Idade</PickerText>
                <Picker onPress={handleOpenOptionsIdade}>
                  <PickerOption>{idade || 'Selecione'}</PickerOption>
                  <PickerIcon />
                </Picker>
                {openOptionsIdade && (
                  <>
                    <RecommendPicker
                      onPress={() => {
                        setIdade('1-19');
                        setOpenOptionsIdade(false);
                      }}
                    >
                      <TextRecommend>1-19 anos</TextRecommend>
                    </RecommendPicker>
                    <RecommendPicker
                      onPress={() => {
                        setIdade('20-59');
                        setOpenOptionsIdade(false);
                      }}
                    >
                      <TextRecommend>20-59 anos</TextRecommend>
                    </RecommendPicker>
                    <RecommendPicker
                      onPress={() => {
                        setIdade('60+');
                        setOpenOptionsIdade(false);
                      }}
                    >
                      <TextRecommend>60+ anos</TextRecommend>
                    </RecommendPicker>
                  </>
                )}
              </PickerArea>
            </PickerContainer>
            {!sexo && !number && !name && !idade ? (
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
    </>
  );
};

export default Categoria;
