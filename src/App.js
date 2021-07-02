import React from 'react';
import logo from './logo.svg';
import './app.scss';
import PrivateTwoColumn from './page/containers/Layouts/PrivateTwoColumn';
import { BrowserRouter, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <React.StrictMode>
          <Switch>
            <PrivateTwoColumn></PrivateTwoColumn>
          </Switch>
        </React.StrictMode>
      </BrowserRouter>
    </div>
  );
}

export default App;
