import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Components from './pages/Components';
import CostumerProducts from './pages/CostomerProducts';
import CostumerProductsId from './pages/CostomerProductsId';
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
      <Route path="/customer/products" component={ CostumerProducts } exact />
      <Route path="/customer/products/id" component={ CostumerProductsId } exact />
    </Switch>
  );
}

export default Routers;
