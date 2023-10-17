const { getCurrentDate } = require("DateUtils");
const { concatSumOfDigits } = require("ConcatSumOfDigits");
const { openApp, closeApp } = require("AppFunctions");
// openOrderForm და closeOrderForm რაკი უბრალოდ ელემენტებზე დაკლიკებები ქეისებშ აღარ გავიტანე და პირდაპირ ვიყენებ
const { openOrderForm } = require("HomePage");
const { closeOrderForm } = require("OrderForm");
const { 
  checkCustomerNameIsWritable,
  checkCustomerNameIsDeletable, 
  checkStreetLabelName, 
  checkStreetInputIsWritable,
  fillCityInput,
  fillZipCodeInput
} = require("OrderFormCases");


function runner() {
  
  let concatenatedInts = concatSumOfDigits(111, 231);
  Log.Message(concatenatedInts);
  
  
  let geoDate = getCurrentDate("Geo");
  let usaDate = getCurrentDate("Usa");
  let euDate = getCurrentDate("Eu");
  
  Log.Message("Georgian date format: " + geoDate);
  Log.Message("Usa date format: " + usaDate);
  Log.Message("Eu date fromat: " + euDate);
 

  openApp();
  
  openOrderForm();
  
  checkCustomerNameIsWritable();
  checkCustomerNameIsDeletable();
 
  checkStreetLabelName();
  checkStreetInputIsWritable();
 
  fillCityInput();
  fillZipCodeInput();
  
  closeOrderForm()
  
  closeApp();
 
}