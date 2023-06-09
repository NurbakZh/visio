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