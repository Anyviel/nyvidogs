import React from 'react';

import Input from '../../Components/Forms/Input/Input';
import Button from '../../Components/Forms/Button/Button';

import useForm from '../../Hooks/useForm';
import { useFetch } from '../../Hooks/useFetch';

import Error from '../../Helpers/Error';

import { PASSWORD_RESET } from '../../api';
import { Navigate } from 'react-router-dom';


const LoginPasswordReset = () => {

  const [login, setLogin] = React.useState('');
  const [key, setKey] = React.useState('');

  const password = useForm();

  const {loading, error, request} = useFetch();

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get('key');
    const login = params.get('login');

    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    if(password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value
      })
  
      const {response} = await request(url, options);
  
      if (response.ok) return <Navigate to="/login" />

    }
  }

  return (
    <div>
     <h1 className="title">Troque sua Senha</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Nova Senha" type="password" name="password" {...password} />
        {loading ? (
            <Button disabled>Carregando...</Button>
          ) : (
            <Button>Resetar</Button>
          )}
      </form>
      <Error error={error} />
    </div>
  )
}

export default LoginPasswordReset;
