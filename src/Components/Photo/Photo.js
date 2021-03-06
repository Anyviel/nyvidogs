import React from 'react'
import { useParams } from 'react-router-dom';
import { PHOTO_GET } from '../../api';
import { useFetch } from '../../Hooks/useFetch';

import Error from '../../Helpers/Error';

import Loading from '../Loading/Loading';
import PhotoContent from './PhotoContent';
import Head from '../../Helpers/Head';

const Photo = () => {

  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options);
  }, [id, request]);


  if(error) return <Error error={error} />
  if(loading) return <Loading />
  if (data)
    return (
      <section className='container mainContainer'>
        <Head title={data.photo.title} />
        <PhotoContent data={data} single={true} />
      </section>
    )
  else return null;
}

export default Photo;
