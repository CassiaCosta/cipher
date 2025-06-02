export function caesarCipher(text: string, shift: number): string {
    const displacementCalc = shift % 65535;

    return text.split('').map(char => {
        if (char === ' ' || char === '\n' || char === '\r') return char;
        
        let code = char.charCodeAt(0);
        let newCode = (code + displacementCalc + 65535) % 65535;

        return String.fromCharCode(newCode);

    }).join('');
}