# React-Serverside-Render
Basic setup for server side rendering using ReactJS and Express

In Client-side rendering, your browser downloads a minimal HTML page. It renders the JavaScript and fills the content into it.
Server-side rendering renders the React components on the server. The output is HTML content.

React can do both Server side rendering(SSR) and Client side rendering(CSR).

React as CSR:<br />

   import React from 'react';<br />
   import ReactDOM from 'react-dom';<br />
   ReactDOM.render(<App />,document.getElementById('root'))
   
React as SSR:<br />
   import React from 'react';<br />
   import ReactDOMServer from 'react-dom';<br />
   ReactDOMServer.renderToString(<App />,document.getElementById('root'))

