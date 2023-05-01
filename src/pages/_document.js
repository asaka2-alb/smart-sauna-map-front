import {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import React from 'react';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charset="utf-8" />
        <link rel="icon" href="/data/img/favicon.ico" />
        <meta name="description" content="Sauna Map" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
