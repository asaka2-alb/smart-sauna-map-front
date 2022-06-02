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
import pic from '../../data/img/logo.png';

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

  const handleFormSubmit = (event) => {
    event.preventDefault(); // デフォルトではページのリロードが行われる。これを防ぐため。
    updateMapViewCenter(setCenter, setOpenAlert, setAlertMessage, query);
    updateSaunas(setSaunas, query, '');
  };

  const handleAlertClose = () => {
    setOpenAlert(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          <Grid item xs={10}>
            <p><img src={pic} alt="logo.png" /></p>
          </Grid>
          <Grid item xs={2}>
            <LongMenu />
          </Grid>
        </Grid>
        <Grid container spacing={3} justifyContent="center" alignItems="center">
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

function updateMapViewCenter(setCenter, setOpenAlert, setAlertMessage, query) {
  const url = 'https://smart-sauna-map-back.herokuapp.com/';
  createPromise(url, { query })
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((location) => {
      setCenter({ lat: location.lat, lng: location.lng });
    })
    .catch((error) => {
      setAlertMessage(error.message);
      setOpenAlert(true);
    });
}

function updateSaunas(setSaunas, keyword = 'shinjuku', prefecture = '') {
  // Python のサウナイキタイパースサーバにクエリを投げてサウナ情報を取得する関数.
  const url = 'https://smart-sauna-map-back.herokuapp.com/sauna';
  createPromise(url, { keyword, prefecture })
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((saunas) => {
      setSaunas(saunas);
    });
}

async function createPromise(url, query) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(query),
  };

  return fetch(url, requestOptions)
    .then((response) => response);
}

export default App;
