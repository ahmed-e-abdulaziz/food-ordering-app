const BASE_URL = "http://localhost:3000";
const MEALS_URL = BASE_URL + "/meals";
const POST_ORDER_URL = BASE_URL + "/orders";

export async function fetchMeals() {
  const res = await fetch(MEALS_URL);
  const body = await res.json();
  return body;
}

export async function postOrder(order) {
  const res = await fetch(POST_ORDER_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ order }),
  });
  return await res.json();
}
