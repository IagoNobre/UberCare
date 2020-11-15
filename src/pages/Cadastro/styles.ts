import { RectButton } from 'react-native-gesture-handler';
import styled, { css } from 'styled-components/native';

interface InputProps {
  focused: boolean;
}

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #ededed;
`;

export const CategoryContainer = styled.View`
  background-color: #ffffff;
  align-items: center;
  padding-top: 48px;
  padding-bottom: 48px;
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

export const ContainerInput = styled.TextInput<InputProps>`
  margin-top: 8px;
  width: 308px;
  height: 38px;
  background-color: #eeeeee;
  padding: 8px;

  ${props =>
    props.focused
      ? css`
          border: 2px solid #000;
        `
      : null}
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
  width: 308px;
  height: 54px;
  margin-top: 28px;
  background-color: #acacac;

  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Recommend = styled.TouchableOpacity`
  width: 308px;
  height: 34px;
  background-color: #fafafa;
  padding: 8px;
  justify-content: center;
  border: 1px solid #eeeeee;
`;

export const RecommendPicker = styled.TouchableOpacity`
  width: 128px;
  height: 34px;
  background-color: #fafafa;
  padding: 8px;
  justify-content: center;
  border: 1px solid #eeeeee;
`;

export const TextRecommend = styled.Text`
  color: #757575;
  font-size: 12px;
  font-family: 'UberMoveText Medium';
`;

export const NumberRecommend = styled.Text`
  color: #757575;
  font-size: 10px;
  font-family: 'UberMoveText Regular';
`;

export const PickerContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 308px;
`;

export const PickerArea = styled.View`
  margin-top: 18px;
`;

export const PickerText = styled.Text`
  font-family: 'UberMoveText Medium';
  font-size: 14px;
  color: #000000;
`;

export const PickerOption = styled.Text`
  font-family: 'UberMoveText Regular';
  font-size: 14px;
  color: #000000;
`;

export const Picker = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
  width: 128px;
  height: 38px;
  background-color: #eeeeee;
  padding: 8px;
`;
