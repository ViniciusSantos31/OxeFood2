import { Component, createRef, useRef, useState } from "react";
import { FiCheckSquare, FiUser } from "react-icons/fi";

import { Form } from "./styles";
import Modal from "../Modal";
import Input from "../Input";
import api from "../../services/api";

interface Login {
  email: string;
  password: string;
}

interface ModalAddFoodProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

export const ModalLogin: React.FC<ModalAddFoodProps> = ({
  setIsOpen,
  isOpen,
}) => {
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
        localStorage.setItem("@user", JSON.stringify(response.data[0]));
        document.location.reload();
        setIsOpen();
      })
      .catch(() => {
        setError(true);
      });
  }

  function handleChange() {
    setError(false);
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Entrar</h1>
        {error && <span>Usuario não encontrado</span>}
        <Input
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Digite seu email"
        />

        <Input
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Digite sua senha"
        />

        <button type="submit" data-testid="login-button">
          <p className="text">Entrar</p>
          <div className="icon">
            <FiUser size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalLogin;
