import React from 'react';

export default function Home() {
  return (
    <html>
      <head>
        <title>Home</title>
        <link rel="stylesheet" href="/public/tailwind.css" />
      </head>
      <body>
        <h1 className=" text-xl font-bold">🏠 Home Page</h1>
        <a href="/about">About dfhd</a> | <a href="/contact">Contact</a>
      </body>
    </html>
  );
}
