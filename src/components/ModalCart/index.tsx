import { Component, createRef, useEffect, useRef, useState } from "react";
import { FiCheckSquare, FiUser } from "react-icons/fi";

import Modal from "../Modal";
import Input from "../Input";
import api from "../../services/api";
import CartItem from "../CartItem";
import { Container, List } from "./styles";

interface Login {
  email: string;
  password: string;
}

interface ModalAddFoodProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

const ModalCart: React.FC<ModalAddFoodProps> = ({ setIsOpen, isOpen }) => {
  const formRef = useRef(null);
  const [error, setError] = useState(false);

  async function handleSubmit(data: Login) {
    // handleAddFood(data);
    api
      .get("/users", {
        params: {
          email: data.email,
          password: data.password,
        },
      })
      .then((response) => {
        console.log(response.data[0]);
        localStorage.setItem("@user", JSON.stringify(response.data[0]));
        document.location.reload();
        setIsOpen();
      })
      .catch(() => {
        setError(true);
      });
  }

  const [cart, setCart] = useState(() => {
    const cart = localStorage.getItem("@cart");
    return cart ? JSON.parse(cart) : [];
  });

  const oldCart = useRef();

  const oldCartValue = oldCart.current ?? cart; // guarda o valor do cart anterior

  useEffect(() => {
    oldCart.current = cart;
    setCart(
      localStorage.getItem("@cart")
        ? JSON.parse(localStorage.getItem("@cart") || "")
        : []
    );
  });

  useEffect(() => {
    if (oldCartValue !== cart) {
      localStorage.setItem("@cart", JSON.stringify(cart));
    }
    oldCart.current = cart;
  }, []);

  function handleFinishOrder() {
    setCart([]);
    localStorage.removeItem("@cart");
    setMessageSuccess(true);
    setTimeout(() => {
      setIsOpen();
      setMessageSuccess(false);
    }, 2000);
  }

  const [messageSuccess, setMessageSuccess] = useState(false);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Container>
        {!messageSuccess ? (
          <>
            <h1>Carrinho</h1>
            <List>
              {cart.map((food: any) => (
                <CartItem key={food.id} food={food} />
              ))}
            </List>
          </>
        ) : (
          <h1>Pedido realizado com sucesso!</h1>
        )}
        {!messageSuccess && (
          <button
            type="submit"
            data-testid="edit-food-button"
            onClick={handleFinishOrder}
            disabled={cart.length === 0}
          >
            <div className="text">Finalizar pedido</div>
            <div className="icon">
              <FiCheckSquare size={24} />
            </div>
          </button>
        )}
      </Container>
    </Modal>
  );
};

export default ModalCart;
