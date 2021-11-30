import React, { useEffect, useState } from "react";
import { FiEdit3, FiMinus, FiPlus, FiTrash } from "react-icons/fi";

import { Container } from "./styles";
import api from "../../services/api";
import { getUserLogged } from "../../utils/getUserLogged";
import Button from "../Button";

interface IFood {
  id: number;
  name: string;
  description: string;
  price: number;
  available: boolean;
  image: string;
}

interface FoodProps {
  food: IFood;
  handleEditFood: (data: IFood) => void;
  handleDelete: (id: number) => void;
}

export const Food: React.FC<FoodProps> = ({
  food,
  handleEditFood,
  handleDelete,
}) => {
  const [isAvailable, setIsAvailable] = useState(food.available);

  const toggleAvailable = async () => {
    await api.put(`/foods/${food.id}`, {
      ...food,
      available: !isAvailable,
    });

    setIsAvailable(!isAvailable);
  };

  const setEditingFood = () => {
    handleEditFood(food);
  };

  const [user, setUser] = useState<{ isLogged: boolean; user: any }>({
    isLogged: false,
    user: {},
  });

  const handleAddToCart = () => {
    const actualCart = localStorage.getItem("@cart");
    if (actualCart) {
      const cart = JSON.parse(actualCart);
      const has = cart.find((item: any) => item.id === food.id);
      if (has) {
        cart.map((item: any) => {
          if (item.id === food.id) {
            item.quantity += 1;
          }
          return item;
        });
      } else {
        cart.push({ ...food, quantity: 1 });
      }

      localStorage.setItem("@cart", JSON.stringify(cart));
    } else {
      localStorage.setItem("@cart", JSON.stringify([{ ...food, quantity: 1 }]));
    }
  };

  useEffect(() => {
    setUser(getUserLogged());
  }, []);

  return (
    <Container available={isAvailable}>
      <header>
        <img src={food.image} alt={food.name} />
      </header>
      <section className="body">
        <h2>{food.name}</h2>
        <p>{food.description}</p>
        <p className="price">
          R$ <b>{food.price}</b>
        </p>
      </section>
      {user.isLogged && user.user.role === "ADMIN" && (
        <section className="footer">
          <div className="icon-container">
            <button
              type="button"
              className="icon"
              onClick={setEditingFood}
              data-testid={`edit-food-${food.id}`}
            >
              <FiEdit3 size={20} />
            </button>

            <button
              type="button"
              className="icon"
              onClick={() => handleDelete(food.id)}
              data-testid={`remove-food-${food.id}`}
            >
              <FiTrash size={20} />
            </button>
          </div>

          <div className="availability-container">
            <p>{isAvailable ? "Disponível" : "Indisponível"}</p>

            <label htmlFor={`available-switch-${food.id}`} className="switch">
              <input
                id={`available-switch-${food.id}`}
                type="checkbox"
                checked={isAvailable}
                onChange={toggleAvailable}
                data-testid={`change-status-food-${food.id}`}
              />
              <span className="slider" />
            </label>
          </div>
        </section>
      )}
      {user.isLogged && user.user.role === "USER" && (
        <section className="footer">
          <div className="availability-container">
            <Button
              icon={FiPlus}
              label="Adicionar no carrinho"
              onClick={handleAddToCart}
            />
          </div>
        </section>
      )}
    </Container>
  );
};

export default Food;
