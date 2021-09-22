import React from "react";

import { Container, ToggleLabel, ToggleSelector } from "./styles";

const Toggle: React.FC = () => {
  return (
    <Container>
      <ToggleLabel>Dark</ToggleLabel>
      <ToggleSelector checked onChange={()=> console.log('a')} uncheckedIcon={false} checkedIcon={false} />
      <ToggleLabel>Light</ToggleLabel>
    </Container>
  );
}

export default Toggle;