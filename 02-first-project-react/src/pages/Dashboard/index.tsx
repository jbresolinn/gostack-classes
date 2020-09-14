import React from 'react';

import { FiChevronRight } from 'react-icons/fi';
import logoImage from '../../assets/images/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImage} alt="github explorer logo" />
      <Title>Explore repositórios no github!</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="/">
          <img
            src="https://api.adorable.io/avatars/285/abott@adorable.png"
            alt="user avatar"
          />
          <div>
            <strong>jbresolinn/repo-teste</strong>
            <p>Aqui vai a descrição bem bonitinha.</p>
          </div>

          <FiChevronRight size={24} />
        </a>
        <a href="/">
          <img
            src="https://api.adorable.io/avatars/285/abott@adorable.png"
            alt="user avatar"
          />
          <div>
            <strong>jbresolinn/repo-teste</strong>
            <p>Aqui vai a descrição bem bonitinha.</p>
          </div>

          <FiChevronRight size={24} />
        </a>
        <a href="/">
          <img
            src="https://api.adorable.io/avatars/285/abott@adorable.png"
            alt="user avatar"
          />
          <div>
            <strong>jbresolinn/repo-teste</strong>
            <p>Aqui vai a descrição bem bonitinha.</p>
          </div>

          <FiChevronRight size={24} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
