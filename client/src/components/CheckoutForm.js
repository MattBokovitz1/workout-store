import React from "react";
import { useForm } from "../hooks/useForm";

const initialValue = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  zip: "",
};

const CheckoutForm = (props) => {
  const [values, handleChanges, handleSubmit, showSuccessMessage] =
    useForm(initialValue);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2 data-testid="form-header">Checkout Form</h2>
        <label>
          First Name:
          <input
            name="firstName"
            value={values.firstName}
            onChange={handleChanges}
            data-testid="firstName"
          />
        </label>
        <label>
          Last Name:
          <input
            name="lastName"
            value={values.lastName}
            onChange={handleChanges}
            data-testid="lastName"
          />
        </label>
        <label>
          Address:
          <input
            name="address"
            value={values.address}
            onChange={handleChanges}
            data-testid="address"
          />
        </label>
        <label>
          City:
          <input
            name="city"
            value={values.city}
            onChange={handleChanges}
            data-testid="city"
          />
        </label>
        <label>
          State:
          <input
            name="state"
            value={values.state}
            onChange={handleChanges}
            data-testid="state"
          />
        </label>
        <label>
          Zip:
          <input
            name="zip"
            value={values.zip}
            onChange={handleChanges}
            data-testid="zip"
          />
        </label>
        <button data-testid="checkout">Checkout</button>
      </form>

      {showSuccessMessage && (
        <div className="success-message" data-testid="successMessage">
          <p>You have ordered some exercise equipment! </p>
          <p>Your new weights will be shipped to:</p>
          <br />
          <br />
          <p data-testid="success-name">
            {values.firstName} {values.lastName}
          </p>
          <p data-testid="success-address">{values.address}</p>
          <p data-testid="success-area">
            {values.city}, {values.state} {values.zip}
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
