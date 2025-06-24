import { useContext, useEffect, useRef } from "react";
import { CartContext } from "../store/cart-context";

export default function Cart({ onSubmit, onClose }) {
  const { items, add, reduce, total } = useContext(CartContext);

  return (
    <>
      <h2>Your Cart</h2>
      <ul>
        {items?.map((i) => {
          return (
            <li className="cart-item" key={i.name}>
              <p>
                {i.name} - {i.count} x {i.price}
              </p>
              <div className="cart-item-actions">
                <button onClick={() => reduce(i)}>-</button>
                <p>{i.count}</p>
                <button onClick={() => add(i)}>+</button>
              </div>
            </li>
          );
        })}
      </ul>
      <p className="cart-total">{total()}</p>
      <div className="modal-actions">
        <button className="text-button" onClick={onClose}>
          Close
        </button>
        <button className="button" onClick={onSubmit}>
          Go To Checkout
        </button>
      </div>
    </>
  );
}
