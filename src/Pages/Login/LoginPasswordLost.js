import React from 'react';

import Input from '../../Components/Forms/Input/Input';
import Button from '../../Components/Forms/Button/Button';

import useForm from '../../Hooks/useForm';
import { useFetch } from '../../Hooks/useFetch';

import Error from '../../Helpers/Error';

import { PASSWORD_LOST } from '../../api';

const LoginPasswordLost = () => {

  const login = useForm();

  const {data, loading, error, request} = useFetch();
  
  const siteURL = window.location.href.replace('perdeu', 'reset');

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = PASSWORD_LOST({
      login: login.value, 
      url: siteURL
    });

    await request(url, options);
  }

  return (
    
    <section>
      <h1 className="title">Perdeu a Senha?</h1>
      {data ? <p style={{color: '#4c1'}}>{data}</p> : (
        <form onSubmit={handleSubmit}>
          <Input label="Usuário / Email" type="text" name="email" {...login} />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar Email</Button>
          )}
        </form>
      )}
      <Error error={error} />
    </section>
  )
}

export default LoginPasswordLost;
