import React from 'react'
import { Route, Routes } from 'react-router-dom';

import UserPhotoPost from './Photo/UserPhotoPost';
import Feed from '../../Components/Feed/Feed';
import UserStats from './Stats/UserStats';
import UserHeader from './Header/UserHeader';

const User = () => {
  return (
    <section className='container'>
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed /> } />
        <Route path="postar" element={<UserPhotoPost /> } />
        <Route path="estatisticas" element={<UserStats /> } />
      </Routes>
    </section>
  )
}

export default User;