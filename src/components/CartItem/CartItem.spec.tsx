import { render } from "@testing-library/react";
import CartItem from "./";

describe("Cart item component", () => {
  const food = {
    id: 1,
    name: "Pizza",
    price: 20.0,
    quantity: 1,
    description: "Pizza de calabresa",
    available: true,
    image:
      "https://www.pizzahut.com.br/static/images/pizzas/pizza-calabresa.png",
  };
  it("should be able to render", () => {
    const { getAllByTestId } = render(<CartItem food={food} />);
    const cartItem = getAllByTestId("cart-item");
    expect(cartItem).toHaveLength(1);
  });
});
