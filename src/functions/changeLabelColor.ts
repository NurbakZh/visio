export function changeLabelColor(
    rgbColor: string,
    labelColor: string,
    type: 'red' | 'green' | 'blue' | 'noColor' | 'basic',
): string {
    const rgbArr = rgbColor.split('(')[1].split(')')[0].split(',');
    const r = Number(rgbArr[0]);
    const g = Number(rgbArr[1]);
    const b = Number(rgbArr[2]);
    const labelRgbArr = labelColor.split('(')[1].split(')')[0].split(',');
    const labelR = Number(labelRgbArr[0]);
    const labelG = Number(labelRgbArr[1]);
    const labelB = Number(labelRgbArr[2]);
    const rgbNew = labelColor;
    const luminosityBackground = (0.299*r + 0.587*g + 0.114*b);
    const luminosityLabel = (0.299*labelR + 0.587*labelG + 0.114*labelB);
    const contrastRatio = Math.max(luminosityBackground, luminosityLabel)
        / Math.min(luminosityBackground, luminosityLabel);
    if (contrastRatio < 4.5) {
        if (type === 'red') {
            const newR = labelR * contrastRatio/4.5;
            return 'rgb('+`${newR},${labelG},${labelB}`+')';
        } else if (type === 'green') {
            const newG = labelG * contrastRatio/4.5;
            return 'rgb('+`${labelR},${newG},${labelB}`+')';
        } else if (type === 'blue') {
            const newB = labelB * contrastRatio/4.5;
            return 'rgb('+`${labelR},${labelG},${newB}`+')';
        } else if (type === 'noColor') {
            const newR = labelR * contrastRatio/4.5;
            const newG = labelG * contrastRatio/4.5;
            const newB = labelB * contrastRatio/4.5;
            return 'rgb('+`${newR},${newG},${newB}`+')';
        } else {
            return rgbNew;
        }
    } else {
        return rgbNew;
    }
}

changeLabelColor("rgb(213, 62, 62)","rgb(241, 252, 85)", 'red');