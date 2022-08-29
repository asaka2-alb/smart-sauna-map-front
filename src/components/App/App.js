import React, { useState } from 'react';
import {
  Grid, ThemeProvider, CssBaseline,
} from '@mui/material';
import ErrorAlert from '../Alerts/Alerts';

import theme from '../../theme/theme';
import './App.css';
import Maps from '../Map/Map';
import QueryForm from '../QueryForm/QueryForm';
import LongMenu from '../LongMenu/LongMenu';
import Logo from '../Logo/Logo';

function App() {
  const [center, setCenter] = useState({ lat: 35.683542, lng: 139.703338 });
  const [saunas, setSaunas] = useState([]);
  const [query, setQuery] = useState('');
  const [openAlert, setOpenAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleFormInput = (event) => {
    // state でも property でもなく event.target.value で値を渡す
    setQuery(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault(); // デフォルトではページのリロードが行われる。これを防ぐため。
    await updateMapViewCenter(query);
    await updateSaunas(query, '');
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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Grid container spacing={{ xs: 2, md: 3 }} justifyContent="center" alignItems="center">
          <Grid item xs={8} md={10}>
            <Logo />
          </Grid>
          <Grid item xs={2}>
            <LongMenu />
          </Grid>
        </Grid>
        <Grid container spacing={{ xs: 2, md: 3 }} justifyContent="center" alignItems="center">
          <Grid item xs={12}>
            <QueryForm
              query={query}
              onInput={handleFormInput}
              onSubmit={handleFormSubmit}
            />
            <ErrorAlert open={openAlert} onClose={handleAlertClose} message={alertMessage} />
          </Grid>
        </Grid>
        <Maps center={center} saunas={saunas} />
      </div>
    </ThemeProvider>
  );
}

async function fetchMapViewCenter(query) {
  const url = 'https://smart-sauna-map-back.herokuapp.com/geocode';
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(query),
  };
  return fetch(url, requestOptions);
}

async function fetchSaunas(query) {
  const url = 'https://smart-sauna-map-back.herokuapp.com/search_sauna';
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(query),
  };
  return fetch(url, requestOptions);
}

export default App;
