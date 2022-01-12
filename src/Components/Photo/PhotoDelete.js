import React from 'react';
import { PHOTO_DELETE } from '../../api';
import { useFetch } from '../../Hooks/useFetch';

import styles from './Photo.module.css';

const PhotoDelete = ({id}) => {

  const {loading, request} = useFetch();

  async function handleClick() {

    const confirm = window.confirm('Deseja deletar essa imagem?');

    if (confirm) {
      const token = window.localStorage.getItem('token');
      const {url, options} = PHOTO_DELETE(id, token);
      const { response } = await request(url, options);
  
      if (response.ok) window.location.reload();
    }

  }

  return (
    <div>
      {loading ? 
        <button className={styles.delete} disabled>Deletar</button> :
        <button onClick={handleClick} className={styles.delete}>Deletar</button>
      }
      
    </div>
  )
}

export default PhotoDelete;
