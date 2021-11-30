import { render } from "@testing-library/react";
import Food from "./";

const food = {
  id: 1,
  name: "Pizza",
  price: 20.0,
  quantity: 1,
  description: "Pizza de calabresa",
  available: true,
  image:
    "https://images.unsplash.com/photo-1575498971787-b7f9c8d9f9e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
};

describe("Food component", () => {
  it("Food component renders correctly", () => {
    const handleEditFood = jest.fn();
    const handleDeleteFood = jest.fn();
    const { getByTestId } = render(
      <Food
        food={food}
        handleEditFood={handleEditFood}
        handleDelete={handleDeleteFood}
      />
    );
  });
});
