import * as React from 'react';

console.log("env=", process.env.NODE_ENV)
//
export default function Page() { 
  return (
  <html>
    <head>
        <title>welcome</title>
        {(process.env.NODE_ENV !== "production") ? (
            <link href="/static/style.css" rel="stylesheet" /> 
        ): (
            <link href="/public/static/style.css" rel="stylesheet" /> 
        )} 
    </head>
    <body>
      <div id="root"></div>
      {(process.env.NODE_ENV !== "production") ? (
        <script type="module" src="/static/entry-client.js"></script>
      ): (
        <script type="module" src="/public/static/entry-client.js"></script>
      )}  
    </body>
  </html>
  );
}
/*
<a href="/">[ home ]</a>
<a href="/about">[ about ]</a>
<hr />        
*/
