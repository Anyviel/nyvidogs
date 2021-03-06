import React from 'react';
import { Link } from 'react-router-dom';

import {ReactComponent as Dogs} from '../../Assets/dogs.svg';
import styles from './Header.module.css';

import { UserContext } from '../../Context/UserContext';

const Header = () => {
  const { data } = React.useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`container ${styles.nav}`}>
        <Link to="/" aria-label="Dogs - Home" className={styles.logo}>
          <Dogs />
        </Link>
        {data ? 
          
          <Link to="/conta" className={styles.login}>
            {data.nome}
          </Link>
          :
          <Link to="/login" className={styles.login}>Login / Criar</Link>
        }
      </nav>
    </header>
  )
}

export default Header;
