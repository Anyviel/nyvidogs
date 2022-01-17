import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';

import NotFound from '../../NotFound';

import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';
import { UserContext } from '../../Context/UserContext';

import styles from './Login.module.css';
import Head from '../../Helpers/Head';

const Login = () => {

  const { login } = React.useContext(UserContext);

  if (login === true) return <Navigate to="/conta" />

  return (
    <section className={styles.login}>
      <Head title="Login" description="Site Dogs - Um lar de cachorros sem igual" />
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginPasswordLost />} />
          <Route path="reset" element={<LoginPasswordReset />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  )
}

export default Login;
