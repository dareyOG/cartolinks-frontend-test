'use client';

import { ReactNode } from 'react';

type ButtonProp = {
  children?: ReactNode;
  handleClick: () => void;
  className: string;
};

function Button({ children, handleClick, className }: ButtonProp) {
  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${className} cursor-pointer`}
    >
      {children}
    </button>
  );
}

export default Button;
