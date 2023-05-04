/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */

import React, { useState } from 'react';
import { Stack } from '@mui/material';
import ErrorAlert from '@/components/Alerts/Alerts';

import backendUrls from './backend_urls.json';

import Maps from '@/components/Map/Map';
import QueryForm from '@/components/QueryForm/QueryForm';

import LoadingScreen from './LoadingScreen/LoadingScreen';

import Layout from '@/components/Layouts/Layout';

function App() {
  const [center, setCenter] = useState({ lat: 35.683542, lng: 139.703338 });
  const [saunas, setSaunas] = useState([]);
  const [query, setQuery] = useState('');
  const [openAlert, setOpenAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleFormInput = (event) => {
    // state でも property でもなく event.target.value で値を渡す
    setQuery(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault(); // デフォルトではページのリロードが行われる。これを防ぐため。
    setIsSearching(true);
    await updateMapViewCenter(query);
    await updateSaunas(query, '');
    setIsSearching(false);
  };

  const handleAlertClose = () => {
    setOpenAlert(false);
  };

  async function updateMapViewCenter(keyword) {
    const response = await fetchMapViewCenter({ query: keyword });
    try {
      if (!response.ok) {
        throw new Error(`${response.status} (${response.statusText})`);
      }
      const location = await response.json();
      setCenter({ lat: location.lat, lng: location.lng });
    } catch (error) {
      setAlertMessage(error.message);
      setOpenAlert(true);
    }
  }

  async function updateSaunas(keyword = 'shinjuku', prefecture = '') {
    // Python のサウナイキタイパースサーバにクエリを投げてサウナ情報を取得する関数.
    const response = await fetchSaunas({ keyword, prefecture });
    try {
      if (!response.ok) {
        throw new Error(response.status);
      }
      setSaunas(await response.json());
    } catch (error) {
      throw new Error(error);
    }
  }

  return (
    <Layout>
      <QueryForm
        query={query}
        onInput={handleFormInput}
        onSubmit={handleFormSubmit}
      />
      <ErrorAlert
        open={openAlert}
        onClose={handleAlertClose}
        message={alertMessage}
      />
      <Stack div sx={{ height: 'calc(80vh - 30px)' }}>
        <Maps center={center} saunas={saunas} />
      </Stack>
      <LoadingScreen isSearching={isSearching} />
    </Layout>
  );
}

async function fetchMapViewCenter(query) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(query),
  };
  return fetch(backendUrls.geocode, requestOptions);
}

async function fetchSaunas(query) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(query),
  };
  return fetch(backendUrls.search_sauna, requestOptions);
}

export default App;
