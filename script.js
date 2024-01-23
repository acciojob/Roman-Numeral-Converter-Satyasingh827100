function convertToRoman(num) {
  // Define the symbols for Roman numerals
  const romanSymbols = [
	    { value: 100000, symbol: 'C̅' }, // 100,000
        { value: 50000, symbol: 'L̅' },  // 50,000
        { value: 10000, symbol: 'X̅' },  // 10,000
        { value: 5000, symbol: 'V̅' },   // 5,000
        { value: 1000, symbol: 'M' },    // 1,000
        { value: 900, symbol: 'CM' },    // 900
        { value: 500, symbol: 'D' },     // 500
        { value: 400, symbol: 'CD' },    // 400
        { value: 100, symbol: 'C' },     // 100
        { value: 90, symbol: 'XC' },     // 90
        { value: 50, symbol: 'L' },      // 50
        { value: 40, symbol: 'XL' },     // 40
        { value: 10, symbol: 'X' },      // 10
        { value: 9, symbol: 'IX' },      // 9
        { value: 5, symbol: 'V' },       // 5
        { value: 4, symbol: 'IV' },      // 4
        { value: 1, symbol: 'I' }        // 1
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
console.log(convertToRoman(14)); 
console.log(convertToRoman(798));
 