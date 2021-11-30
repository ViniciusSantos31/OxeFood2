import React from "react";
import { Button as ButtonStyled } from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ComponentType<any>;
  label?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  icon: Icon,
  label,
  onClick,
  disabled,
}) => {
  return (
    <ButtonStyled
      onClick={onClick}
      type="submit"
      data-testid="button-component"
      disabled={disabled}
    >
      <span className="text">{label}</span>
      {Icon && (
        <div className="icon">
          <Icon size={24} />
        </div>
      )}
    </ButtonStyled>
  );
};

export default Button;
