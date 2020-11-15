import styled from 'styled-components/native';

interface ContainerProps {
  height: number;
}

export const Container = styled.View<ContainerProps>`
  background-color: #ffffff;
  bottom: 0px;
  width: 100%;
  height: ${props => props.height}px;
  position: absolute;
  align-items: center;
`;

export const BottomIcon = styled.View`
  width: 74px;
  height: 5px;
  border-radius: 8px;
  margin-top: 8px;
  background-color: #cccccc;
`;
