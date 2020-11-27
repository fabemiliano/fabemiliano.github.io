import React from 'react';
import { Title, Text, HomeCenterColumnDiv } from '../styled-components/styles';
import { useHistory } from 'react-router-dom';

function Home() {
  const history = useHistory()
  return (
    <HomeCenterColumnDiv height='100'>
      <Title color='#fff'>Seja bem-vindo à pesquisa de Clima Dressler</Title>
      <Text color='#fff'>Essa é uma pesquisa anônima, sendo que nenhum dado a seu respeito será salvo, portanto não responda a essa pesquisa
      mais de um vez para que não haja dados errados.
      </Text>
      <button onClick={() => history.push('/questions')}>Começar</button>
    </HomeCenterColumnDiv>
  );
}

export default Home;
