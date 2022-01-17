import React from 'react'
import { Route, Routes } from 'react-router-dom';

import UserPhotoPost from './Photo/UserPhotoPost';
import Feed from '../../Components/Feed/Feed';
import UserStats from './Stats/UserStats';
import UserHeader from './Header/UserHeader';
import { UserContext } from '../../Context/UserContext';

import Head from '../../Helpers/Head';

const User = () => {

  const { data } = React.useContext(UserContext);

  return (
    <section className='container'>
      <Head title="Minha Conta" description="Site Dogs - Um lar de cachorros sem igual" />
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} /> } />
        <Route path="postar" element={<UserPhotoPost /> } />
        <Route path="estatisticas" element={<UserStats /> } />
      </Routes>
    </section>
  )
}

export default User;