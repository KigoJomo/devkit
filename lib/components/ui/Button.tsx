import React, { ButtonHTMLAttributes } from 'react';
import Link from 'next/link';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  href?: string;
  target?: '_blank' | '_self';
  variant?: 'primary' | 'outline' | 'danger';
  size?: 'default' | 'sm' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  target,
  variant = 'primary',
  size = 'default',
  className = '',
  type = 'button',
  onClick,
  ...props
}) => {
  const baseStyles =
    'flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 cursor-pointer';

  const variantStyles = {
    primary: 'bg-foreground text-background hover:bg-foreground-light',
    outline:
      'bg-transparent border border-foreground-light/40 text-foreground hover:bg-background-light',
    danger: 'bg-red-500 text-background hover:bg-red-600',
  };

  const sizeStyles = {
    sm: 'text-sm px-3 py-1',
    default: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3',
  };

  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} target={target} className={buttonStyles} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={buttonStyles} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
