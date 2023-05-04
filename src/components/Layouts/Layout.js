/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */

import React from 'react';
import { ThemeProvider, CssBaseline, Stack } from '@mui/material';

import theme from '@/theme/theme';

import Logo from '@/components/Logo/Logo';
import CopyRight from '@/components/CopyRight/CopyRight';

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <header>
          <Logo />
        </header>
        <nav>
          <div>
            <ol>
              <li>Home</li>
              <li>Disclaimer</li>
            </ol>
          </div>
        </nav>
        <main>
          {children}
        </main>
        <footer>
          <Stack>
            <CopyRight />
          </Stack>
        </footer>
      </div>
    </ThemeProvider>
  );
}
