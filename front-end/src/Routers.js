import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Components from './pages/Components';
import Register from './pages/Register';

function Routers() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/login" component={ Login } exact />
        <Route path="/components" component={ Components } exact />
        <Route path="/register" component={ Register } exact />
      </Switch>
    </div>
  );
}

export default Routers;
