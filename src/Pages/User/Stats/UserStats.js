import React from 'react';
import Head from '../../../Helpers/Head';
import Error from '../../../Helpers/Error';
import Loading from '../../../Components/Loading/Loading';

import { STATS_GET } from '../../../api';
import { useFetch } from '../../../Hooks/useFetch';

const UserStatsGraphs = React.lazy(() => import('./UserStatsGraphs'));

const UserStats = () => {

  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      await request(url, options);
    }

    getData();
  }, [request])

  if (loading) return <Loading />
  if (error) return <Error error={error} />
  if(data)
    return (
      <React.Suspense fallback={<div></div>}>
        <Head title="Estatísticas" description="Home do Site Dogs - Um lar de cachorros sem igual" />
        <UserStatsGraphs data={data} />
      </React.Suspense>
    )
  else return null;
}

export default UserStats
