import React from 'react';

import Feed from '../../Components/Feed/Feed';
import Head from '../../Helpers/Head';

const Home = () => {
  return (
    <section className='container mainContainer'>
      <Head title="Fotos" description="Site Dogs - Um lar de cachorros sem igual" />
      <Feed />
    </section>
  )
}

export default Home;
