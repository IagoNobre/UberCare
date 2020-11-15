import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #ededed;
`;

export const SimpleButton = styled(RectButton)`
  width: 298px;
  height: 54px;
  margin-top: 28px;
  background-color: #000000;

  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 18px;
  font-family: 'UberMoveText Medium';
`;
