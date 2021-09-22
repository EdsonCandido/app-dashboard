import React from "react";
import {Grid} from './styles';

import HeaderMain from "../HeaderMain";
import Aside from "../Aside";
import Content from "../Content";

const Layout: React.FC = ({children}) => {
return (
  <Grid>
    <HeaderMain/>
    <Aside/>
    <Content>
      {children}
    </Content>
  </Grid>
);
}
export default Layout;