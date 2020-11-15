import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #ededed;
`;

export const CategoryContainer = styled.View`
  background-color: #ffffff;
  align-items: center;
  padding-top: 28px;
  height: 428px;
  width: 100%;
  bottom: 0px;
  position: absolute;
`;

export const SimpleButton = styled(RectButton)`
  width: 298px;
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
