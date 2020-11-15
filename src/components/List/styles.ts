import styled, { css } from 'styled-components/native';

interface ListProps {
  selected: boolean;
  special?: boolean;
}

export const Container = styled.TouchableOpacity`
  height: 40px;
  width: 298px;
  margin-top: 12px;
`;

export const Title = styled.Text<ListProps>`
  font-family: 'UberMoveText Medium';
  font-size: 18px;
  ${props =>
    props.selected
      ? css`
          color: #000000;
        `
      : css`
          ${props.special
            ? css`
                color: #00a7dc;
              `
            : css`
                color: #acacac;
              `}
        `};
`;

export const Icon = styled.View<ListProps>`
  height: 22px;
  width: 22px;
  background-color: #ffffff;
  border-radius: 11px;
  ${props =>
    props.selected
      ? css`
          border: 8px solid #000000;
        `
      : css`
          border: 8px solid #acacac;
        `};
`;

export const Category = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Line = styled.View`
  margin-top: 12px;
  height: 1px;
  background-color: #e2e2e2;
`;
