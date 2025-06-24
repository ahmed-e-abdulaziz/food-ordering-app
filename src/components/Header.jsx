import { useContext } from "react";
import logo from "../assets/logo.jpg";
import { CartContext } from "../store/cart-context";

export default function Header({ onCartClick }) {
  const { items } = useContext(CartContext);
  const uniqueItems = [...new Set(items.map((i) => i.id))].map((id) =>
    items.find((it) => it.id === id)
  );
  return (
    <header id="main-header">
      <div id="title">
        <h1>ReactFood</h1>
        <img src={logo} alt="A restaurant image" />
      </div>
      <nav>
        <button className="button" onClick={onCartClick}>
          Cart ({uniqueItems.length})
        </button>
      </nav>
    </header>
  );
}
