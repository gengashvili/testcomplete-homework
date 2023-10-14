const OrderFormCases = require("OrderFormCases");
const { openApp, closeApp } = require("CommonFunctions");

function MainRunner() {
  let orderFormCases = new OrderFormCases();
  
  openApp();
  
  orderFormCases.addOrderFromList();
  orderFormCases.validateOrderAddedFromList();
  orderFormCases.addOrderFromBtn();
  orderFormCases.validateOrderAddedFromBtn();
  orderFormCases.checkProductsQuantity();
  orderFormCases.validateQuantityInput();
  orderFormCases.validatePriceInputs();
  orderFormCases.validateIvalidDate();
  
  closeApp();
}