
function concatSumOfDigits (number1, number2) {
  
  if (typeof number1 !== 'number' || typeof number2 !== 'number') {
    Log.Error("both parameters must be numbers");
    return null;
  }
  
  let stringNumber1 = aqConvert.IntToStr(number1);
  let stringNumber2 = aqConvert.IntToStr(number2);
  
  if(stringNumber1.length != 3 || stringNumber2.length != 3) {
    Log.Error("both parameters must be 3 digit nnumber");
    return null;
  }
  
  let number1DigitsArray = Array.from(stringNumber1, Number);
  let number2DigitsArray = Array.from(stringNumber2, Number);
  
  let sumOfNumber1Digits = number1DigitsArray.reduce((a, b) => a + b);
  let sumOfNumber2Digits = number2DigitsArray.reduce((a, b) => a + b);
  
  let concatenatedSumOfDigits = aqString.Concat(sumOfNumber1Digits, sumOfNumber2Digits);
  let result = aqConvert.StrToInt(concatenatedSumOfDigits);
  
  return result;
}

module.exports = { concatSumOfDigits };