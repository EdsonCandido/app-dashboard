import React from 'react';
import { Container } from './styles';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';

const Dashboard: React.FC = () => {
  const ano = [{value: '2021',label: '2021'}];
  const mes = [{value: '1', label: 'Janeiro'}]
  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#fff">
        <SelectInput  options={mes}/>
      </ContentHeader>
    </Container>
  );
}

export default Dashboard;