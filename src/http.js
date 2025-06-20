const BASE_URL = "http://localhost:3000";
const MEALS = BASE_URL + "/meals";

export async function fetchMeals() {
  const res = await fetch(MEALS);
  const body = await res.json();
  console.log(body);
  return body;
}
