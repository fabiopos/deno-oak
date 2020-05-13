// @deno-types="https://servestjs.org/@v1.0.0-rc2/types/react/index.d.ts"
import React from "https://dev.jspm.io/react/index.js";
import { DFC } from "https://servestjs.org/@v1.0.0-rc2/mod.ts";

const Index: DFC<{ title: string; text: string }> = ({ title, text }) => {
  return (
    <html>
      <head>
        <meta charSet={"UTF-8"} />
        <title>{title}</title>
      </head>
      <body>
        <div>{text}</div>
      </body>
    </html>
  );
};

// getInitialProps is an asynchronous data fetcher
// for rendering components in server side.
// This is identical methodology to Next.js
// It will be called exactly once for each request.
Index.getInitialProps = async () => {
  const resp = await fetch("https://jsonplaceholder.typicode.com/todos/2");
  const text = await resp.text();
  return { title: "About Page", text };
};

// default export are used for Server Side Rendering.
export default Index;