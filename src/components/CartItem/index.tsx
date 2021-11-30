import React from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { Container, Description } from "./styles";

interface CartItemProps {
  food: any;
}

const CartItem: React.FC<CartItemProps> = ({ food }) => {
  const cart = JSON.parse(localStorage.getItem("@cart") || "[]");

  function handleEdit(value: number) {
    cart.map((item: any) => {
      if (item.id === food.id) {
        if (item.quantity + value > 1) {
          item.quantity += value;
        } else {
          item.quantity = 1;
        }
      } else {
        return item;
      }
    });
    console.log(cart);
    localStorage.setItem("@cart", JSON.stringify(cart));
  }

  function handleDeleteItem(id: number) {
    cart.map((item: any, index: number) => {
      if (item.id === food.id) {
        cart.splice(index, 1);
      }
    });
    localStorage.setItem("@cart", JSON.stringify(cart));
  }

  return (
    <Container data-testid="cart-item">
      <Description>
        <h3>{food.name}</h3>
        <div className="price">
          R$ <b>{food.price}</b>
        </div>
      </Description>
      <div className="icon-container">
        <button
          type="button"
          className={`icon ${food.quantity !== 1 ? "" : "delete"}`}
          onClick={() => {
            food.quantity !== 1 ? handleEdit(-1) : handleDeleteItem(food.id);
          }}
        >
          {food.quantity !== 1 ? <FiMinus size={20} /> : "Excluir"}
        </button>

        <div>{food.quantity}</div>
        <button type="button" className="icon" onClick={() => handleEdit(1)}>
          <FiPlus size={20} />
        </button>
      </div>
    </Container>
  );
};

export default CartItem;
