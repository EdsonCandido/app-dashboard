import React from "react";
import Layout from "./components/Layout";
import GlobalStyles from "./styles/GlobalStyles";
import {ThemeProvider} from 'styled-components';
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";
import Dashboard from "./Pages/Dashboard";
import List from "./Pages/List";
const App:React.FC = () => {

  return(
    <ThemeProvider theme={dark}>
      <GlobalStyles/>
      <Layout>
        {/* <Dashboard/> */}
        <List/>
      </Layout>
    </ThemeProvider>
  );
}

export default App;