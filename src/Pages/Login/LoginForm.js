import React from 'react'
import { Link } from 'react-router-dom';
import Input from '../../Components/Forms/Input/Input';
import Button from '../../Components/Forms/Button/Button';
import useForm from '../../Hooks/useForm';

const LoginForm = () => {

  let apiURL = process.env.REACT_APP_URL_API; // Variavel de Ambiente para teste de Api Local

  if (apiURL === undefined || apiURL === '') {
    apiURL = 'https://dogsapi.origamid.dev';
  }

  // console.log(apiURL);
  
  const username = useForm();
  const password = useForm();
  
  function handleLogin(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {

      fetch(`${apiURL}/json/jwt-auth/v1/token`, {
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(),
      }).then((res) => {
        console.log(res);
        return res.json();
      }).then((json) => {
        console.log(json);
      })
    }
  }
  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleLogin}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  )
}

export default LoginForm;
