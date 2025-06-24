import { useActionState, useContext } from "react";
import { CartContext } from "../store/cart-context";
import Input from "./Input";

export default function Checkout({ setOrder, onClose }) {
  const { items, total } = useContext(CartContext);
  function handleForm(prevState, formData) {
    console.log("Hello");
    const fullName = formData.get("full-name");
    const email = formData.get("email");
    const street = formData.get("street");
    const postal = formData.get("postal");
    const city = formData.get("city");
    let errors = [];

    if (fullName.trim() === "") {
      errors.push("Full Name is empty");
    }
    if (!email.includes("@")) {
      errors.push("Email is invalid or empty");
    }

    if (street.trim() === "") {
      errors.push("Street is empty");
    }
    if (postal.trim() === "") {
      errors.push("Postal Code is empty");
    }
    if (city.trim() === "") {
      errors.push("City is empty");
    }

    if (errors.length > 0) {
      console.log(errors, fullName, email, street, postal, city);
      return { ...prevState, errors };
    }
    setOrder({
      customer: { name: fullName, email, street, "postal-code": postal, city },
      items,
    });
    return { ...prevState };
  }
  const [checkoutState, checkoutAction, pending] = useActionState(handleForm, {
    errors: null,
  });

  return (
    <>
      <h2>Checkout</h2>
      <p>Total Amount: {total()}</p>
      <form action={checkoutAction}>
        <Input
          label="Full Name"
          name="full-name"
          value={checkoutState.fullName}
        />
        <Input
          label="E-Mail Address"
          name="email"
          value={checkoutState.email}
        />
        <Input label="Street" name="street" value={checkoutState.street} />
        <div className="control-row">
          <Input
            label="Postal Code"
            name="postal"
            value={checkoutState.postal}
          />
          <Input label="City" name="city" value={checkoutState.city} />
        </div>
        <div className="modal-actions">
          <button className="text-button" onClick={onClose}>
            Close
          </button>
          <button className="button">Submit Order</button>
        </div>
      </form>
    </>
  );
}
