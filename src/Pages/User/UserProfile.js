import React from 'react'
import { useParams } from 'react-router-dom';
import Feed from '../../Components/Feed/Feed';
import Head from '../../Helpers/Head';

const UserProfile = () => {

  const {user} = useParams();

  return (
    <section className='container mainContainer'>
      <Head title={user} description="Home do Site Dogs - Um lar de cachorros sem igual" />
      <h1 className='title'>{user}</h1>
      <Feed user={user} />
    </section>
  )
}

export default UserProfile;
