import ReactDOMServer from 'react-dom/server';
import React from 'react';

const app = (Chiled: any) => {
  return ReactDOMServer.renderToStaticMarkup(
    <html>
      <head>
        <title>Home</title>
        <link rel="stylesheet" href="/public/tailwind.css" />
      </head>
      <body>
        <Chiled />
      </body>
    </html>,
  );
};

export default app;
