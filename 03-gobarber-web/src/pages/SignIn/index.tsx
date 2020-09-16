import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import { Container, Content, Background } from './styles';
import logoImage from '../../assets/logo.svg';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImage} alt="go barber logo" />

      <form>
        <h1>Faça seu logon</h1>

        <input placeholder="Email" />
        <input type="password" placeholder="Senha" />

        <button type="submit">Entrar</button>
        <a href="/">Esqueci minha senha</a>
      </form>

      <a href="/">
        <FiLogIn />
        Criar conta
      </a>
    </Content>
    <Background />
  </Container>
);

export default SignIn;
