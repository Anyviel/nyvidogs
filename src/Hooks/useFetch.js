import React from 'react'

export const useFetch = () => {

  const [ data, setData] = React.useState(null);
  const [ error, setError] = React.useState(null);
  const [ loading, isLoading] = React.useState(false);

  const request = React.useCallback(async (url, options) => {
    let response;
    let json;

    try {
      setError(null);
      isLoading(true);

      response = await fetch(url, options);
      json = await response.json();

      if( response.ok === false) throw new Error(json.message);
    } catch (err) {
      json = null;

      setError(err.message);
    } finally {
      setData(json);
      isLoading(false);
      
      return { response, json };
    }
  }, [])

  return {
    data,
    loading,
    error,
    request
  }
}
