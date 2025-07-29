"use strict";
//Exemplos: number
let num1 = 10.5; // número decimal
let num2 = 0x78CF; // hexadecimal
let num3 = 0b101010; // binário
let num4 = 0o777; // octal
console.log(`Número Decimal: ${num1}`); // 10.5
console.log(`Número Hexadecimal: ${num2}`); // 30863
console.log(`Número Binário: ${num3}`); // 42
console.log(`Número Octal: ${num4}`); // 511
console.log(typeof (num1), typeof (num2), typeof (num3), typeof (num4));
//Exemplos: BigInt
let bigInt1 = 1234567890123456789012345678901234567890n; // BigInt com sufixo 'n'
let bigInt2 = 12297829382473034410n; // BigInt binário
let bigInt3 = 0x20000000000000000003n; // BigInt hexadecimal
let bigInt4 = 1237940039285380274899124223n; // BigInt octal
console.log(`BigInt Decimal: ${bigInt1}`); // 1234567890123456789012345678901234567890n
console.log(`BigInt Binário: ${bigInt2}`); // 1234567890123456789012345678901234567890n
console.log(`BigInt Hexadecimal: ${bigInt3}`); // 20000000000000000003n
console.log(`BigInt Octal: ${bigInt4}`); // 777777777777777777777777777777n
