export function changeColor(
    rgbColor: string,
    type: 'red' | 'green' | 'blue' | 'noColor' | 'basic',
    intensity: number,
): string {
    const rgbArr = rgbColor.split('(')[1].split(')')[0].split(',');
    const r = Number(rgbArr[0]);
    const g = Number(rgbArr[2]);
    const b = Number(rgbArr[4]);
    const rgbNew = rgbColor;
    console.log(r,g,b);
    if (type === 'red') {
        const newR = r * intensity;
        console.log('rgb('+`${newR},${g},${b}`+')');
        return 'rgb('+`${newR},${g},${b}`+')';
    } else if (type === 'green') {
        const newG = g * intensity;
        console.log('rgb('+`${r},${newG},${b}`+')');
        return 'rgb('+`${r},${newG},${b}`+')';
    } else if (type === 'blue') {
        const newB = b * intensity;
        console.log('rgb('+`${r},${g},${newB}`+')');
        return 'rgb('+`${r},${g},${newB}`+')';
    } else if (type === 'noColor') {
        const newR = r * intensity;
        const newG = g * intensity;
        const newB = b * intensity;
        console.log('rgb('+`${newR},${newG},${newB}`+')');
        return 'rgb('+`${newR},${newG},${newB}`+')';
    } else {
        return rgbNew;
    }
}