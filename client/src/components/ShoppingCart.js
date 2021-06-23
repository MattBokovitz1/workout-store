import React from "react";

export default function ShoppingCart(props) {
  const total = props.cart.reduce((sum, d) => sum + d.price, 0);
  return (
    <div className="cart">
      {props.cart.map((weight) => (
        <div className="weight-card" key={weight.id}>
          <img className="weight-image" src={weight.img} alt={weight.name} />
          <div className="weight-details">
            <h2 className="weight-name">{weight.name}</h2>
            <h2 className="weight-made">{weight.made}</h2>
            <p>${weight.price}</p>
            <button
              className="weight-button"
              onClick={() => props.removeFromCart(weight)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className="checkout-section">
        <p className="total">Total: ${total}</p>
        <button
          className="checkout"
          onClick={() => props.history.push("/checkout")}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
