/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */

import React from 'react';
import { ThemeProvider, CssBaseline, Stack } from '@mui/material';

import theme from '@/theme/theme';

import Logo from '@/components/Logo/Logo';
import Navbar from '@/components/Navbars/Navbar';
import CopyRight from '@/components/CopyRight/CopyRight';

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <header>
            <Logo />
          </header>
          <nav>
            <Navbar />
          </nav>
        </Stack>
        <main>
          {children}
        </main>
        <footer>
          <CopyRight />
        </footer>
      </div>
    </ThemeProvider>
  );
}
