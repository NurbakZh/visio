import React from "react";

export interface ButtonProps {
  label: string;
  backgroundColor: string;
  labelColor: string;
  onClick: () => void;
  className: string;
  intensity?: number;
  type: 'red' | 'green' | 'blue' | 'noColor' | 'basic';
}

const Button = (props: ButtonProps) => {
    const backgroundColor = changeColor(
        props.backgroundColor, props.type, props.intensity || 0.5
    );
    const labelColor = changeLabelColor(
        backgroundColor, props.labelColor, props.type
    );
    return (
      <button
        style={{
          backgroundColor: backgroundColor,
          color: labelColor
        }}
        className={props.className}
        onClick={props.onClick}
      >
        {props.label}
      </button>
    );
};

export default Button;