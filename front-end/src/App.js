import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={ ['/login', '/'] } exact>
          <div>Login</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
