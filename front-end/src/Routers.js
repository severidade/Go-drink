import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Components from './pages/Components';

function Routers() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/login" component={ Login } exact />
        <Route path="/components" component={ Components } exact />
      </Switch>
    </div>
  );
}

export default Routers;
