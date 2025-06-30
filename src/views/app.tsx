import ReactDOMServer from 'react-dom/server';
import React from 'react';

const app = (Chiled: any) => {
  return ReactDOMServer.renderToStaticMarkup(
    <html>
      <head>
        <title>Home</title>
        <link rel="stylesheet" href="/public/tailwind.css" />
        <meta charSet="UTF-8"></meta>
        <meta
          name="description"
          content="React Pre-Ready Dashboard on Nest"
        ></meta>
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, typescript, nestjs"
        ></meta>
        <meta name="author" content="Md Sharif"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </head>
      <body>
        <Chiled />
      </body>
    </html>,
  );
};

export default app;
