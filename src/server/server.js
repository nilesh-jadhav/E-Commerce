import express from "express";
import cors from "cors";
import React from "react";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import { HeadCollector } from "react-head";
import { StaticRouter, matchPath } from "react-router-dom";
import serialize from "serialize-javascript";
import routes from "../shared/routes";
import configureStore from "../shared/store/configureStore";
import initialState from "../shared/store/initialState";
import App from "../client/App";
import "source-map-support/register";

// import { objExists, deleteCookie } from "../shared/lib/utils";

const app = express();

app.use(cors());
app.use(express.static("build"));

app.get("*", (req, res, next) => {
  const store = configureStore(initialState);

  const promises = routes.reduce((acc, route) => {
    if (
      matchPath(req.url, route) &&
      route.component &&
      route.component.getInitialProps
    ) {
      acc.push(
        Promise.resolve(store.dispatch(route.component.getInitialProps()))
      );
    }
    return acc;
  }, []);

  Promise.all(promises)
    .then(() => {
      const context = {};
      const headTags = [];
      const markup = renderToString(
        <Provider store={store}>
          <StaticRouter location={req.url} context={context}>
            <HeadCollector headTags={headTags}>
              <App />
            </HeadCollector>
          </StaticRouter>
        </Provider>
      );

      const initialData = store.getState();
      console.log(initialData);
      res.send(`
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset=UTF-8" />
            ${renderToString(headTags)}
            <script>window.__initialData__ = ${serialize(initialData)}</script>
          </head>
          <body class="Site">
            <div id="root" class="Site-content">${markup}</div>
            <script src="/bundle.js" defer></script>
          </body>
        </html>
      `);
    })
    .catch(next);
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is listening");
});
