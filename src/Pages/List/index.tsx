import React from 'react';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import { Container } from './styles';

const List: React.FC = () => {

  const ano = [{value: '2021',label: '2021'}];
  const mes = [{value: '1', label: 'Janeiro'}]
  return (
    <Container>
      <ContentHeader title="Entradas" lineColor="#F7931B">
        <SelectInput  options={mes}/>
      </ContentHeader>
    </Container>
  );
}

export default List;