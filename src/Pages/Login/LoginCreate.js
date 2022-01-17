import React from 'react'
import { USER_POST } from '../../api';
import useForm from '../../Hooks/useForm';
import { useFetch } from '../../Hooks/useFetch';
import { UserContext } from '../../Context/UserContext'

import Button from '../../Components/Forms/Button/Button';
import Input from '../../Components/Forms/Input/Input';
import Error from '../../Helpers/Error';
import Head from '../../Helpers/Head';

const LoginCreate = () => {

  const username = useForm();
  const email = useForm('email');
  const password = useForm();

  const { userLogin } = React.useContext(UserContext);

  const { loading, error, request } = useFetch();

  async function handleSubmit(e) {
    e.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value
    })

    const { response } = await request(url, options);
    
    if(response.ok) userLogin(username.value, password.value);
  }

  return (
    <section className='animeLeft'>
      <Head title="Cadastre-se" description="Home do Site Dogs - Um lar de cachorros sem igual" />
      <h1 className='title'>Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? 
          <Button disabled>Cadastrando...</Button> 
          : 
          <Button>Cadastrar</Button>
        }
        <Error error={error} />
      </form>
    </section>
  )
}

export default LoginCreate;
