export default function Meal({ meal }) {
  return (
    <aricle>
      <div key={meal.id} className="meal-item">
        <img src={`http://localhost:3000/${meal.image}`} />
        <h3>{meal.name}</h3>
        <p className="meal-item-price">{meal.price}</p>
        <p className="meal-item-description">{meal.description}</p>
        <div className="meal-item-actions">
          <button className="button">Add to cart</button>
        </div>
      </div>
    </aricle>
  );
}
