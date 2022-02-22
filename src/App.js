import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import MainHeader from "./components/MainHeader";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <Router>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductDetails />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
