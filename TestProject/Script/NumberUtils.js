
const getRandomNumber = () => {
  let min = 1000000; 
  let max = 9999999; 
  
  let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  
  return randomNumber;
}


module.exports = getRandomNumber;