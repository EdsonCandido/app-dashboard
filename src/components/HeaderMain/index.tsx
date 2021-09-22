import React from "react";

 import Toggle from "../Toggle";

import {Container, Profile, Welcome, UserName} from './styles';

const HeaderMain: React.FC = () => {
return (
  <Container>
    <Toggle/>

    <Profile>
      <Welcome> Olá,</Welcome>
      <UserName>Edson Cândido</UserName>
    </Profile>
  </Container>
);
}
export default HeaderMain;