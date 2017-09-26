import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import appStore from './store';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={appStore}>
      <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
