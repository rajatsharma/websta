import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import DragContext from './connectors/dragcontext'

import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './store'
import Dashboard from './pages/dashboard'

const Root = (
  <Provider store={store} >
    <DragContext>
      <Dashboard />
    </DragContext>
  </Provider>
)

ReactDOM.render(
  Root,
  document.getElementById('root')
);

serviceWorker.register();
