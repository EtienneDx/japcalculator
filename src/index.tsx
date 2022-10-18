import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { theme } from './style/theme';


Sentry.init({
  dsn: "https://ce985e51e56d4e0dad01f16317577e76@o4504004750016512.ingest.sentry.io/4504004751654912",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
  debug: true,
  enabled: true,
  environment: process.env.NODE_ENV,
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
