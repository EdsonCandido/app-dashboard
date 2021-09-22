import styled from 'styled-components' ;

export const Container = styled.div`
  grid-area: AS;
  padding-left: 20px;
  border-right: 1px solid ${props => props.theme.color.gray};
  background-color: ${props => props.theme.color.secondary};
`;
export const MenuContainer = styled.nav`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  `;
export const MenuItemLink = styled.a`
  color:  ${props => props.theme.color.info};
  text-decoration: none;
  display: flex;
  align-items: center;
  margin: 7px 0;

  transition: opacity .3s;
  &:hover{
    opacity: .7;
  }

  >svg {
    font-size: 18px;
    margin-right: 5px;
  }
`;

export const Header = styled.header`
  display: flex;
  height: 70px;
  align-items: center;
`;
export const LogoImg = styled.img `
  height: 40px;
  width: 40px;
`;
export const Title = styled.h3 `
  color: ${props => props.theme.color.white};
  margin-left: 10px;
`;