import ReactDOMServer from 'react-dom/server';
import React from 'react';

const app = (Chiled: any) => {
  return ReactDOMServer.renderToStaticMarkup(<Chiled />);
};

export default app;
