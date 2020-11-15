import styled from 'styled-components/native';

export const SearchContainer = styled.TouchableOpacity`
  margin-top: 32px;
  width: 308px;
  height: 62px;
  background-color: #ededed;
  padding-left: 18px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const DescriptionTitle = styled.Text`
  font-family: 'UberMoveText Medium';
  font-size: 22px;
  color: #000000;
`;

export const MarkerTime = styled.View`
  width: 118px;
  height: 44px;
  margin-right: 8px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-radius: 48px;
  background-color: #ffffff;
`;

export const TimerText = styled.Text`
  font-family: 'UberMoveText Medium';
  font-size: 16px;
  color: #000000;
`;

export const LatastPosition = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 308px;
  margin-top: 32px;
`;

export const Circle = styled.View`
  height: 52px;
  width: 52px;
  border-radius: 26px;
  background-color: #eeeeee;
  align-items: center;
  justify-content: center;
`;

export const TextBox = styled.View`
  text-align: left;
`;

export const TitleLocal = styled.Text`
  font-family: 'UberMoveText Regular';
  font-size: 16px;
  color: #000000;
`;
