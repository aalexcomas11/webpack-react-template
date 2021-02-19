import React from 'react';

interface ButtonProps{
    children: React.ReactNode
    onClick(): void
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`
        bg-blue-100
        hover:bg-blue-200
        px-4
        py-2
        rounded-b
    `}
  >
    {children}
  </button>
);

export default Button;
