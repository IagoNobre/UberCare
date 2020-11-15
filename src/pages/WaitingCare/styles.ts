import styled from 'styled-components/native';

export const ContainerInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
  width: 308px;
`;

export const DescriptionTitle = styled.Text`
  font-family: 'UberMoveText Medium';
  font-size: 23px;
  color: #000000;
`;

export const Squad = styled.View`
  height: 58px;
  width: 58px;
  align-items: center;
  justify-content: center;
  background-color: #1d6ff6;
`;

export const SquadText = styled.Text`
  font-family: 'UberMoveText Medium';
  line-height: 23px;
  width: 40px;
  text-align: center;
  color: #ffffff;
  font-size: 21px;
`;

export const Line = styled.View`
  height: 1px;
  width: 100%;
  margin-top: 22px;
  background-color: #e2e2e2;
`;

export const InfoMotorist = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 308px;
  margin-top: 24px;
`;

export const Number = styled.Text`
  font-family: 'UberMoveText Medium';
  font-size: 22px;
  color: #000000;
  text-align: right;
`;

export const Type = styled.Text`
  font-family: 'UberMoveText Regular';
  font-size: 14px;
  color: #000000;
  text-align: right;
`;

export const Names = styled.Text`
  margin-top: 8px;
  font-family: 'UberMoveText Medium';
  font-size: 14px;
  color: #32698b;
  text-align: right;
`;

export const MessageBox = styled.View`
  flex-direction: row;
  margin-top: 24px;
  align-items: center;
  justify-content: space-between;
  width: 308px;
`;

export const Chat = styled.TouchableOpacity`
  width: 248px;
  height: 48px;
  background-color: #ededed;
  align-items: center;
  border-radius: 48px;
  justify-content: center;
`;

export const TextChat = styled.Text`
  font-family: 'UberMoveText Medium';
  font-size: 18px;
  color: #000000;
`;

export const Circle = styled.TouchableOpacity`
  width: 48px;
  height: 48px;
  background-color: #ededed;
  align-items: center;
  border-radius: 24px;
  justify-content: center;
`;
