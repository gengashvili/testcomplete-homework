const homePage = require("HomePage");
const orderForm = require("orderForm");
const getRandomNumber = require("NumberUtils");
const NewOrderData = require("NewOrderData");
const Assert = require("Assert");
const exptectedCardButtonsCount = require("AssertData");
const httpGetRequest = require("ApiFunctions");


const checkCardButtonsCount = () => {
  homePage.openOrderForm();
  let buttons = orderForm.getCardButtons();
  Assert.areEquals(buttons.length,exptectedCardButtonsCount,"there are 3 card buttons as expected");
  orderForm.clickOnCancelButton();
};


const fillCardNumberAndLogIt = () => {
  homePage.openOrderForm();
  orderForm.setCardValue(getRandomNumber());
  Log.Message(orderForm.getCardValue());
  orderForm.clickOnCancelButton();
};

const addNewOrder = () => {
  homePage.openOrderForm();
  orderForm.setCustomerName(NewOrderData.customerName);
  orderForm.clickOnOkButton();
};


const checkThatOrderIsEditable = () => {
  let addedOrderName = NewOrderData.customerName;
  let newName = NewOrderData.newCustomerName;
  
  homePage.openAddedOrder(addedOrderName);
  orderForm.setCustomerName(newName);
  orderForm.clickOnOkButton();
  homePage.openAddedOrder(newName);
  
  Assert.areEquals(newName, orderForm.getCustomerName(), "order edited successfully");
  
  orderForm.clickOnCancelButton();
};


const setKeyFromApiData = () => {
  let result = httpGetRequest(Project.Variables.BASEURL);
  
  homePage.openAddedOrder(NewOrderData.newCustomerName);
  orderForm.setCardValue(result.key);
  orderForm.clickOnOkButton();
}

const setCustomerNameFromApiData = () => {
  let result = httpGetRequest(Project.Variables.BASEURL + "?type=music");
  
  homePage.openAddedOrder(NewOrderData.newCustomerName);
  orderForm.setCustomerName(result.activity);
  orderForm.clickOnOkButton();
}


module.exports = { 
  checkCardButtonsCount,
  fillCardNumberAndLogIt,
  addNewOrder,
  checkThatOrderIsEditable,
  setKeyFromApiData,
  setCustomerNameFromApiData
};