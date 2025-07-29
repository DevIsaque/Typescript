//Exemplos: number

let num1: number = 10.5; // número decimal
let num2: number = 0x78CF; // hexadecimal
let num3: number = 0b101010; // binário
let num4: number = 0o777; // octal

console.log(`Número Decimal: ${num1}`); // 10.5
console.log(`Número Hexadecimal: ${num2}`); // 30863
console.log(`Número Binário: ${num3}`); // 42
console.log(`Número Octal: ${num4}`); // 511

console.log(
    typeof(num1),
    typeof(num2),
    typeof(num3),
    typeof(num4)
);

//Exemplos: BigInt

let bigInt1: bigint = 1234567890123456789012345678901234567890n; // BigInt com sufixo 'n'
let bigInt2: bigint = 0b1010101010101010101010101010101010101010101010101010101010101010n; // BigInt binário
let bigInt3: bigint = 0x20000000000000000003n; // BigInt hexadecimal
let bigInt4: bigint = 0o777777777777777777777777777777n; // BigInt octal

console.log(`BigInt Decimal: ${bigInt1}`); // 1234567890123456789012345678901234567890n
console.log(`BigInt Binário: ${bigInt2}`); // 1234567890123456789012345678901234567890n
console.log(`BigInt Hexadecimal: ${bigInt3}`); // 20000000000000000003n
console.log(`BigInt Octal: ${bigInt4}`); // 777777777777777777777777777777n
