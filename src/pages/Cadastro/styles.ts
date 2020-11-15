import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #ededed;
`;

export const CategoryContainer = styled.View`
  background-color: #ffffff;
  align-items: center;
  padding-top: 48px;
  width: 100%;
  margin-top: 28px;
  flex: 1;
`;

export const InputArea = styled.View`
  margin-top: 18px;
`;

export const TitleInput = styled.Text`
  font-family: 'UberMoveText Medium';
  font-size: 14px;
  color: #000000;
`;

export const ContainerInput = styled.TextInput`
  margin-top: 8px;
  width: 308px;
  height: 38px;
  background-color: #eeeeee;
  padding: 8px;
`;

export const SimpleButton = styled(RectButton)`
  width: 308px;
  height: 54px;
  margin-top: 28px;
  background-color: #000000;

  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 18px;
  font-family: 'UberMoveText Medium';
`;

export const SimpleButtonDisable = styled.View`
  width: 298px;
  height: 54px;
  margin-top: 28px;
  background-color: #acacac;

  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
