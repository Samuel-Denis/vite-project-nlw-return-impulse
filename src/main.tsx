import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { Widget } from './components/widget';


import './global.css';
 
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Widget />
  </React.StrictMode>
)
