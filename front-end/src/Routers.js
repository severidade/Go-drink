import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login';

function Routers() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/login" component={ Login } exact />
      </Switch>
    </div>
  );
}

export default Routers;
