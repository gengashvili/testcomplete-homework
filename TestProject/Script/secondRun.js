var { openOrder, closeOrder } = require("commonFunctions");
var { addOrder, checkOrder, deleteOrder } = require("orderFunctionsWithAliases");
var { order } = require("orderData");

function main() {
  let firstCustomerName = order.customerName1;
  let secondCustomerName = order.customerName2;
  
  openOrder();
  
  addOrder(firstCustomerName);
  addOrder(secondCustomerName);

  checkOrder(firstCustomerName);
  checkOrder(secondCustomerName);
  
  deleteOrder(firstCustomerName);
  deleteOrder(secondCustomerName);

  closeOrder();
}
