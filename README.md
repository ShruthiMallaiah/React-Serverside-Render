# React-Serverside-Render
Basic setup for server side rendering using ReactJS and Express

In Client-side rendering, your browser downloads a minimal HTML page. It renders the JavaScript and fills the content into it.
Server-side rendering renders the React components on the server. The output is HTML content.

React can do both Server side rendering(SSR) and Client side rendering(CSR).

React as CSR:

   import React from 'react';
   import ReactDOM from 'react-dom';

   ReactDOM.render(<App />,document.getElementById('root'))
   
React as SSR:
   import React from 'react';
   import ReactDOMServer from 'react-dom';

   ReactDOMServer.renderToString(<App />,document.getElementById('root'))

