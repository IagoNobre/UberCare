import styled from 'styled-components/native';

interface AlertProps {
  top: number;
}

export const Container = styled.View<AlertProps>`
  height: 118px;
  width: 100%;
  background-color: #00a7dc;
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
  justify-content: center;
  padding-left: 18px;

  position: absolute;
  top: ${props => props.top}%;
`;

export const Title = styled.Text`
  font-family: 'UberMoveText Medium';
  font-size: 18px;
  color: #ffffff;
`;

export const Content = styled.Text`
  width: 268px;
  margin-top: 4px;
  font-family: 'UberMoveText Regular';
  font-size: 15px;
  color: #ffffff;
`;

export const Action = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-top: 4px;
`;

export const TextAction = styled.Text`
  font-family: 'UberMoveText Bold';
  font-size: 17px;
  color: #ffffff;
`;
