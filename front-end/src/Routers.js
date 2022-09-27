import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Components from './pages/Components';
import CustomerProducts from './pages/CustomerProducts';
import CustomerProductsId from './pages/CustomerProductsId';
import Register from './pages/Register';

function Routers() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/login" component={ Login } exact />
      <Route path="/register" component={ Register } exact />
      <Route path="/components" component={ Components } exact />
      <Route path="/customer/products" component={ CustomerProducts } exact />
      <Route path="/customer/products/id" component={ CustomerProductsId } exact />
    </Switch>
  );
}

export default Routers;
