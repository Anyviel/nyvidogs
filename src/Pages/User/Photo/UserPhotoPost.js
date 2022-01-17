import React from 'react';

import Input from '../../../Components/Forms/Input/Input';
import Button from '../../../Components/Forms/Button/Button';

import Error from '../../../Helpers/Error';
import { PHOTO_POST } from '../../../api';
import useForm from '../../../Hooks/useForm';
import { useFetch } from '../../../Hooks/useFetch';

import styles from './UserPhotoPost.module.css';
import { useNavigate } from 'react-router-dom';
import Head from '../../../Helpers/Head';

const UserPhotoPost = () => {

  const nome = useForm();
  const peso = useForm('number');
  const idade = useForm('number');
  const desc = useForm();

  const [img, setImg] = React.useState({});

  const { data, error, loading, request } = useFetch();

  const navigate = useNavigate();

  React.useEffect(() => {
    if (data) navigate('/conta');
  },[data, navigate])

  function handleImgChange({ target }) { 
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0]
    })
  }

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();

    formData.append('img', img.raw);
    formData.append('nome', nome.value);
    formData.append('peso', peso.value);
    formData.append('idade', idade.value);
    formData.append('desc', desc.value);

    const token = window.localStorage.getItem('token');
    const { url, options } = PHOTO_POST(formData, token);
    request(url, options);
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <Head title="Poste sua foto" description="Home do Site Dogs - Um lar de cachorros sem igual" />
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="Peso" type="number" name="peso" {...peso} />
        <Input label="Idade" type="number" name="idade" {...idade} />
        <Input label="Desc" type="textarea" name="desc" {...desc} />
        <input className={styles.file} type="file" name="img" id="img" onChange={handleImgChange} />
        {loading ? <Button disabled>Enviando...</Button> : <Button>Enviar</Button>}
        <Error error={error} />
      </form>
      <div>
        {img.preview && (
          <div
            className={styles.preview}
            style={{backgroundImage: `url('${img.preview}')`}}
          ></div>
        )}
      </div>
    </section>
  )
}

export default UserPhotoPost
