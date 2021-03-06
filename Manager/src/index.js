// editor
import 'react-quill/dist/quill.snow.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DateAdapter from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ConfirmProvider } from 'material-ui-confirm';
import { AuthProvider } from './contexts/AuthContext';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <LocalizationProvider dateAdapter={DateAdapter}>
        <ReduxProvider store={store}>
          <ConfirmProvider>
            <AuthProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </AuthProvider>
          </ConfirmProvider>
        </ReduxProvider>
      </LocalizationProvider>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
