import React from "react";
import {MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp} from 'react-icons/md';

import logoImg from '../../assets/logo.svg';

import {MenuContainer, Title, MenuItemLink, Container, Header, LogoImg} from './styles';

const Aside: React.FC = () => {
return (
  <Container>
    <Header>
      <LogoImg src={logoImg} alt="logo"/>
      <Title>Nome do Negócio</Title>
    </Header>
    <MenuContainer>
      <MenuItemLink href="#">
        <MdDashboard/>
        Dashboard
      </MenuItemLink>
      <MenuItemLink href="#">
        <MdArrowUpward/>
        Dashboard
      </MenuItemLink>
      <MenuItemLink href="#">
        <MdArrowDownward/>
        Dashboard
      </MenuItemLink>
      <MenuItemLink href="#">
        <MdExitToApp/>
        Sair
      </MenuItemLink>
    </MenuContainer>
  </Container>
);
}
export default Aside;