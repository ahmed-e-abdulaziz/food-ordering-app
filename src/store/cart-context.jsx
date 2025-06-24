import { createContext, useState } from "react";

export const CartContext = createContext({
  items: [], // name, price, count, etc...
  add: (item) => {},
  reduce: (item) => {},
  total: () => {},
});

const findItemIndex = (prevCartState, item) =>
  prevCartState.items.findIndex((i) => i.id === item.id);

export default function CartContextProvider({ children }) {
  const [cartState, setCartState] = useState({ items: [] });

  function add(item) {
    setCartState((prevCartState) => {
      const idx = findItemIndex(prevCartState, item);
      const newItems = [...prevCartState.items];
      if (idx === -1) {
        newItems.push({ ...item, count: 1 });
      } else {
        newItems[idx] = {
          ...prevCartState.items[idx],
          count: prevCartState.items[idx].count + 1,
        };
      }
      return { ...prevCartState, items: newItems };
    });
  }

  function reduce(item) {
    setCartState((prevCartState) => {
      const idx = findItemIndex(prevCartState, item);
      const newItems = [...prevCartState.items];
      if (item.count === 1) {
        newItems.splice(idx, 1);
      } else {
        newItems[idx] = {
          ...prevCartState.items[idx],
          count: prevCartState.items[idx].count - 1,
        };
      }
      return { ...prevCartState, items: newItems };
    });
  }

  function total() {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(
      cartState.items.reduce((sum, item) => (sum += item.count * item.price), 0)
    );
  }
  const ctxValue = {
    items: cartState.items,
    add,
    reduce,
    total,
  };
  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}
