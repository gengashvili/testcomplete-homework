const { openApp, closeApp } = require("AppFunctions");
const { 
  checkCardButtonsCount,
  fillCardNumberAndLogIt, 
  addNewOrder, 
  checkThatOrderIsEditable,
  setKeyFromApiData,
  setCustomerNameFromApiData
} = require("OrderFormCases");

function runner() {
 
  openApp();
  
  checkCardButtonsCount();
  fillCardNumberAndLogIt();
  addNewOrder();
  checkThatOrderIsEditable();
  
  setKeyFromApiData();
  setCustomerNameFromApiData();
  
  closeApp();

}