var { openOrder, closeOrder } = require("commonFunctions");
var { addOrderByKeyWordTest } = require("orderFunctionsWithKeyWordTests");

function main() {
  
  helloWorld();
  openOrder();
  addOrderByKeyWordTest();
  closeOrder();
  
}

function helloWorld() {
  Log.Message("hello world!");
}