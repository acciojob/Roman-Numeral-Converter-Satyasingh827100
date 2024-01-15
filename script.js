function convertToRoman(num) {
  // Define the symbols for Roman numerals
  const romanSymbols = [
    { value: 1000, symbol: 'M' },
    { value: 900, symbol: 'CM' },
    { value: 500, symbol: 'D' },
    { value: 400, symbol: 'CD' },
    { value: 100, symbol: 'C' },
    { value: 90, symbol: 'XC' },
    { value: 50, symbol: 'L' },
    { value: 40, symbol: 'XL' },
    { value: 10, symbol: 'X' },
    { value: 9, symbol: 'IX' },
    { value: 5, symbol: 'V' },
    { value: 4, symbol: 'IV' },
    { value: 1, symbol: 'I' }
  ];

  // Initialize an empty string to store the Roman numeral representation
  let romanNumeral = '';

  // Loop through the Roman symbols and subtract their values from the input number
  for (let i = 0; i < romanSymbols.length; i++) {
    while (num >= romanSymbols[i].value) {
      romanNumeral += romanSymbols[i].symbol;
      num -= romanSymbols[i].value;
    }
  }

  return romanNumeral;
}
//console.log(convertToRoman(14)); 
//console.log(convertToRoman(798));
 