import React, { useState } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import WeightList from "./components/WeightList";
import ShoppingCart from "./components/ShoppingCart";
import CheckoutForm from "./components/CheckoutForm.js";
import "./App.css";
import gym from "./assets/gym.jpg";

function App() {
  // array of weights that have been added to the cart
  const [cart, setCart] = useState([]);

  // add a weight to the cart
  const addToCart = (weight) => {
    setCart([...cart, weight]);
  };

  // remove a weight from the cart
  const removeFromCart = (weight) => {
    setCart(cart.filter((w) => w.id !== weight.id));
  };

  return (
    <div>
      <Router>
        <nav className="container">
          <h1>React Exercise</h1>
          <img src={gym} alt="weight lifter icon" width="8%" />

          <ul className="steps">
            <li>
              <NavLink exact to="/">
                Gear
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart">
                Cart
                <span className="cart-badge">
                  {cart.length > 0 && cart.length}
                </span>
              </NavLink>
            </li>
          </ul>
        </nav>
        <Route
          exact
          path="/"
          render={() => <WeightList addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          render={(props) => (
            <ShoppingCart
              {...props}
              cart={cart}
              removeFromCart={removeFromCart}
            />
          )}
        />
        <Route path="/checkout" component={CheckoutForm} />
      </Router>
    </div>
  );
}

export default App;
