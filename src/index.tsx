import React from 'react';
import ReactDOM from 'react-dom';
import { Main } from './Main';
import { BrowserRouter } from 'react-router-dom';

import { Workbox } from 'workbox-window';

if ('serviceWorker' in navigator) {
  const wb = new Workbox('/sw.js');
  wb.register();
}

ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  document.getElementById('root')
);
