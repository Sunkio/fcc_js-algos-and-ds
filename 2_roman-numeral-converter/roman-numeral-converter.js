class Converter {
  constructor (arabNum) {
    this.arabNum = arabNum;
    this.romNumFinal = "";
  }

  convertNum(romNum, romNumValue) {
    while (this.arabNum >= romNumValue) {
      this.romNumFinal += romNum;
      this.arabNum -= romNumValue;
    }
  }
}

function convertToRoman(num) {
  let converter = new Converter(num);

  converter.convertNum('M', 1000);
  converter.convertNum('CM', 900);
  converter.convertNum('D', 500);
  converter.convertNum('CD', 400);
  converter.convertNum('C', 100);
  converter.convertNum('XC', 90);
  converter.convertNum('L', 50);
  converter.convertNum('XL', 40);
  converter.convertNum('X', 10);
  converter.convertNum('IX', 9);
  converter.convertNum('V', 5);
  converter.convertNum('IV', 4);
  converter.convertNum('I', 1);
  return converter.romNumFinal;
}

console.log(convertToRoman(5469));
