import styled from 'styled-components' ;

export const Container = styled.div`
  grid-area: CT;
  padding: 25px;
  color: ${props => props.theme.color.white};
  background-color: ${props => props.theme.color.primary};
`;