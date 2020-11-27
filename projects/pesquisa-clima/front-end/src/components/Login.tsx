import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { Title, Label, Text, CenterColumnDiv } from '../styled-components/styles';

// tslint:disable-next-line: ter-max-len
function doLogin(user: string, password: string, setLoged: any, setShowMessage: any, setMessage: any): any {
  axios.post('http://localhost:3001/login', { password, user })
    .then(() => setLoged(true))
    .catch((err) => { setMessage(err.response.data.message); setShowMessage(true); });
}

function Login(): JSX.Element {
  const [user, setUser] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loged, setLoged] = useState<boolean>(false);
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  return (
    <CenterColumnDiv height='100'>
      <Title color='#fff'>Pesquisa de Clima 2020</Title>
      <CenterColumnDiv height='20'>
        <CenterColumnDiv height='15'>
          <Label color='#fff' htmlFor='user'>Usuário
          </Label>
          <input id='user' value={user} onChange={e => setUser(e.target.value)} />
        </CenterColumnDiv>
        <CenterColumnDiv height='15'>
          <Label color='#fff' htmlFor='password'>Senha
          </Label>
          <input id='password' type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </CenterColumnDiv>
        <button onClick={() => doLogin(user, password, setLoged, setShowMessage, setMessage)}>
          Entrar
        </button>
      </CenterColumnDiv>
        {showMessage && <Text color='#fff'>{message}</Text>}
        {loged && <Redirect to='/home' />}
    </CenterColumnDiv>
  );
}

export default Login;
