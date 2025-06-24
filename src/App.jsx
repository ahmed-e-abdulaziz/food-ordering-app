import { useEffect, useState } from "react";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Meals from "./components/Meals";
import CartContextProvider from "./store/cart-context";
import Checkout from "./components/Checkout";
import Modal from "./components/Modal";
import { postOrder } from "./http.js";

function App() {
  const [isCheckout, setIsCheckout] = useState(false);
  const [open, setOpen] = useState(false);
  const [order, setOrder] = useState(null);
  function closeModel() {
    setOpen(false);
    setIsCheckout(false);
  }
  function onCartClick() {
    setOpen(true);
  }
  useEffect(() => {
    if (order) {
      console.log("order");
      postOrder(order).then((res) => {
        console.log(res);
      });
    }
  }, [order]);

  return (
    <>
      <CartContextProvider>
        <Header onCartClick={onCartClick} />
        <Meals />
        <Modal open={open} onClose={closeModel}>
          {isCheckout ? (
            <Checkout setOrder={setOrder} onClose={closeModel} />
          ) : (
            <Cart onSubmit={() => setIsCheckout(true)} onClose={closeModel} />
          )}
        </Modal>
      </CartContextProvider>
    </>
  );
}

export default App;
