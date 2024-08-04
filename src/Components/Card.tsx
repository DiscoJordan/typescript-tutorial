import React, {useState} from "react";

export enum CardVariant {
  outlined = "outlined",
  primary = "primary",
}

interface CardProps {
  width?: string;
  height?: string;
  variant: CardVariant;
  children?: React.ReactNode
  onClick: (num:number)=> void
}

// const Card: React.FC<CardProps> = ({ width, height, children, variant,onClick }) => {
const Card=({ width, height, children, variant,onClick }:CardProps) => {
    const [state, setstate] = useState(0);
  return (
    <div
      style={{
        width,
        height,
        border: variant === CardVariant.outlined ? "1px solid green" : "none",
        background: variant === CardVariant.primary ? 'red' : "green",
      }}
      onClick={()=>onClick(state)}
    >
      {children}
    </div>
  );
};

export default Card;
