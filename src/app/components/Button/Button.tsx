import React from 'react';
import classNames from 'classnames';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  backgroundColor?: string;
  onClick?: () => unknown;
}

export const Button = ({
  variant = 'primary',
  size = 'medium',
  backgroundColor,
  children,
  onClick,
  ...rest
}: ButtonProps) => {
  return (
    <button
      type='button'
      className={classNames(
        'cursor-pointer rounded-md font-sans font-semibold border-2 border-transparent',
        {
          'text-white bg-blue-500': variant === 'primary',
          'text-blue-500 border-2 border-blue-500': variant === 'secondary',
          'py-2 px-4 text-xs': size === 'small',
          'py-2.5 px-5': size === 'medium',
          'py-3 px-6 text-lg': size === 'large',
        },
      )}
      style={{ backgroundColor }}
      onClick={onClick}
      {...rest}>
      {children + ' '}
    </button>
  );
};
