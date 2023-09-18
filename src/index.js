import React from 'react';
import ReactDOM, { hydrate, render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import StoreProvider from './contextStore/StoreProvider';
import App from './App';
import * as serviceWorker from './serviceWorker';

// import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.css';

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
  hydrate(<React.Fragment>
    <StoreProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StoreProvider>
  </React.Fragment>, rootElement);
} else {
  render(<React.Fragment>
    <StoreProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StoreProvider>
  </React.Fragment>, rootElement);
}

serviceWorker.unregister();

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// import '../node_modules/font-awesome/css/font-awesome.css';

// ReactDOM.render(<App />, document.getElementById('root'));