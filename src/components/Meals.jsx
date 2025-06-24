import { useEffect, useState } from "react";
import { fetchMeals } from "../http";
import Meal from "./Meal";

export default function Meals() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetchMeals().then((res) => setMeals(res));
  }, []);

  return (
    <section id="meals">
      {meals.length > 0 &&
        meals.map((meal) => <Meal key={meal.id} meal={meal} />)}
    </section>
  );
}
