import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from '~/root/App';

(window as any).meta={}
ReactDOM.render(
  <React.StrictMode>
    {/* {Object.keys((window as any).meta).length&&(window as any).meta} */}
    <App />
   
  </React.StrictMode>,
  document.getElementById('root')
);
