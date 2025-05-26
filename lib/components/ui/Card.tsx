import React from 'react';
import Link from 'next/link';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  href,
  onClick,
}) => {
  const baseClasses =
    'bg-gradient-to-br from-accent/10 to-background border border-foreground-light/20 rounded-lg p-4 transition-all duration-300 hover:border-foreground-light/40 hover:shadow-lg';

  const cardContent = (
    <div className={`${baseClasses} ${className}`} onClick={onClick}>
      {children}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
};

export default Card;
