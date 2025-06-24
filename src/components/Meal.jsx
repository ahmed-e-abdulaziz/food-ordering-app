import { useContext } from "react";
import { CartContext } from "../store/cart-context";

export default function Meal({ meal }) {
  const { add: addMeal } = useContext(CartContext);

  return (
    <article>
      <div className="meal-item">
        <img src={`http://localhost:3000/${meal.image}`} />
        <h3>{meal.name}</h3>
        <p className="meal-item-price">{meal.price}</p>
        <p className="meal-item-description">{meal.description}</p>
        <div className="meal-item-actions">
          <button
            className="button"
            onClick={() => {
              addMeal(meal);
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
}
