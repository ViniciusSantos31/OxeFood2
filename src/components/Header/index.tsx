import { Component, useEffect, useState } from "react";
import { FiLogOut, FiPlusSquare, FiShoppingCart, FiUser } from "react-icons/fi";

import { Container } from "./styles";
import Logo from "../../assets/logo.svg";
import api from "../../services/api";
import { getUserLogged } from "../../utils/getUserLogged";
import ModalCart from "../ModalCart";
import Button from "../Button";

interface HeaderProps {
  openModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ openModal }) => {
  const [user, setUser] = useState<{ isLogged: boolean; user: any }>({
    isLogged: false,
    user: {},
  });

  useEffect(() => {
    setUser(getUserLogged());
  }, []);

  const [state, setState] = useState({
    modalCartOpen: false,
  });

  const toggleModalCart = () => {
    setState({ ...state, modalCartOpen: !state.modalCartOpen });
  };

  const handleLogout = () => {
    localStorage.removeItem("@user");
    setUser({ isLogged: false, user: {} });
    window.location.reload();
  };

  return (
    <Container data-testid="header">
      <ModalCart isOpen={state.modalCartOpen} setIsOpen={toggleModalCart} />
      <header>
        <div id="logo">
          Bem vindo,
          {user.isLogged ? (
            <>
              <b> {user.user.name}</b>{" "}
              <Button onClick={handleLogout} label="Sair" icon={FiLogOut} />
            </>
          ) : (
            " Visitante"
          )}
        </div>
        <nav>
          <div>
            {user.isLogged && user.user.role === "ADMIN" && (
              <button type="button" onClick={openModal}>
                <div className="text">Novo Prato</div>
                <div className="icon">
                  <FiPlusSquare size={24} />
                </div>
              </button>
            )}
            {user.isLogged && user.user.role === "USER" && (
              <button type="button" onClick={toggleModalCart}>
                <div className="text">Carrinho</div>
                <div className="icon">
                  <FiShoppingCart size={24} />
                </div>
              </button>
            )}
            {!user.isLogged && (
              <button type="button" onClick={openModal}>
                <div className="text">Entrar</div>
                <div className="icon">
                  <FiUser size={24} />
                </div>
              </button>
            )}
          </div>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
