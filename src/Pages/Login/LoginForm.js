import React from 'react'
import { Link } from 'react-router-dom';
import Input from '../../Components/Forms/Input/Input';
import Button from '../../Components/Forms/Button/Button';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../Context/UserContext';
import Error from '../../Helpers/Error';

import styles from './Login.module.css';
import stylesBtn from '../../Components/Forms/Button/Button.module.css';

const LoginForm = () => {
  
  const username = useForm();
  const password = useForm();
  
  const { userLogin, error, loading } = React.useContext(UserContext);
  
  async function handleLogin(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }
  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form className={styles.form} action="" onSubmit={handleLogin}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? 
          <Button disabled>Carregando...</Button> 
          :
          <Button>Entrar</Button>
        }
        <Error error={error} />
      </form>
      <Link className={styles.perdeu} to="/login/perdeu">Perdeu a Senha?</Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no Site.</p>
      </div>
      <Link className={stylesBtn.button} to="/login/criar">Cadastro</Link>
    </section>
  )
}

export default LoginForm;
