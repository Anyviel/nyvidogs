import React from 'react';

import Error from '../../../Helpers/Error';
import { COMMENT_POST } from '../../../api';
import { useFetch } from '../../../Hooks/useFetch';

import {ReactComponent as Enviar} from '../../../Assets/enviar.svg';

import styles from './PhotoComments.module.css';

const PhotoCommentsForm = ({id, setComments, single}) => {

  const {request, error} = useFetch();

  const [comment, setComment] = React.useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    const token = window.localStorage.getItem('token');

    const {url, options} = COMMENT_POST(id, {comment}, token);

    const {response, json} = await request(url, options);

    if(response.ok) {
      setComment('');
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <form className={`${styles.form} ${single ? styles.single : ''}`} onSubmit={handleSubmit}>
      <textarea
        className={styles.textarea}
        id='comment'
        name='comment'
        placeholder='Comente...'
        value={comment}
        onChange={({target}) => setComment(target.value)}
      />
      <button className={styles.button}><Enviar /></button>
      <Error error={error} />
    </form>
  )
}

export default PhotoCommentsForm;
