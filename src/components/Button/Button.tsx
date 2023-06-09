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
    function changeColor(
        rgbColor: string,
        type: 'red' | 'green' | 'blue' | 'noColor' | 'basic',
        intensity: number,
    ): string {
        const rgbArr = rgbColor.split('(')[1].split(')')[0].split(',');
        const r = Number(rgbArr[0]);
        const g = Number(rgbArr[2]);
        const b = Number(rgbArr[4]);
        const rgbNew = rgbColor;
        if (type === 'red') {
            const newR = r * intensity;
            return 'rgb('+`${newR},${g},${b}`+')';
        } else if (type === 'green') {
            const newG = g * intensity;
            return 'rgb('+`${r},${newG},${b}`+')';
        } else if (type === 'blue') {
            const newB = b * intensity;
            return 'rgb('+`${r},${g},${newB}`+')';
        } else if (type === 'noColor') {
            const newR = r * intensity;
            const newG = g * intensity;
            const newB = b * intensity;
            return 'rgb('+`${newR},${newG},${newB}`+')';
        } else {
            return rgbNew;
        }
    }
    function changeLabelColor(
        rgbColor: string,
        labelColor: string,
        type: 'red' | 'green' | 'blue' | 'noColor' | 'basic',
    ): string {
        const rgbArr = rgbColor.split('(')[1].split(')')[0].split(',');
        const r = Number(rgbArr[0]);
        const g = Number(rgbArr[2]);
        const b = Number(rgbArr[4]);
        const labelRgbArr = labelColor.split('(')[1].split(')')[0].split(',');
        const labelR = Number(labelRgbArr[0]);
        const labelG = Number(labelRgbArr[2]);
        const labelB = Number(labelRgbArr[4]);
        const rgbNew = labelColor;
        const luminosityBackground = (0.299*r + 0.587*g + 0.114*b);
        const luminosityLabel = (0.299*labelR + 0.587*labelG + 0.114*labelB);
        const contrastRatio = Math.max(luminosityBackground, luminosityLabel)
            / Math.min(luminosityBackground, luminosityLabel);
        if (contrastRatio < 4.5) {
            if (type === 'red') {
                const newR = labelR * 4.5/contrastRatio;
                return 'rgb('+`${newR},${labelG},${labelB}`+')';
            } else if (type === 'green') {
                const newG = labelG * 4.5/contrastRatio;
                return 'rgb('+`${labelR},${newG},${labelB}`+')';
            } else if (type === 'blue') {
                const newB = labelB * 4.5/contrastRatio;
                return 'rgb('+`${labelR},${labelG},${newB}`+')';
            } else if (type === 'noColor') {
                const newR = labelR * 4.5/contrastRatio;
                const newG = labelG * 4.5/contrastRatio;
                const newB = labelB * 4.5/contrastRatio;
                return 'rgb('+`${newR},${newG},${newB}`+')';
            } else {
                return rgbNew;
            }
        } else {
            return rgbNew;
        }
    }
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