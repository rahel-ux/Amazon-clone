import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
import './index.css'
import { StateProvider } from './StateProvider.jsx'
import reducer, { initialState } from './Reducer.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);
