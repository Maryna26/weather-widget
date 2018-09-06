import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import AppStore from './store/AppStore'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={AppStore}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
