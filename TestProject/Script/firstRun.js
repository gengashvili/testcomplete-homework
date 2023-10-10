var { openOrder, closeOrder } = require("orderFunctions");

  
function helloWorld() {
    Log.Message("hello world!");
}
  

function main() {
  helloWorld();
  openOrder();
  Test1();
  closeOrder();
}