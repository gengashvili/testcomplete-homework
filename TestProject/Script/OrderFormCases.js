const { openOrderForm } = require("HomePage");
const { 
  setCustomerName,
  getCustomerName,
  deleteCustomerName,
  getStreetLabelName, 
  setStreet,
  getStreetValue,
  setCity,
  setZipCode,
  closeOrderForm
} = require("OrderForm");
const { address, customerName } = require("FormData");
const { exptectedStreetLabelName } = require("AssertData");
const { Assert } = require("Assert");
const { getFirstWord, getLastWord } = require("StringUtils");


const checkCustomerNameIsWritable = () => {
  setCustomerName(customerName);
  
  let actualCustomerName = getCustomerName();
  let expectedCustomerName = customerName;
  
  Assert.areEquals(actualCustomerName, expectedCustomerName, "text wrote in customer name succesfully");
}


const checkCustomerNameIsDeletable = () => {
  let actualCustomerName = getCustomerName();
  
  deleteCustomerName(actualCustomerName);
  
  let renewedCustomerName = getCustomerName();
  
  Assert.isEmpty(renewedCustomerName, "customer name deleted succesfully");
}

const checkStreetLabelName = () => {
  let actualStreetLabelName = getStreetLabelName();
  let expectedStreetLabelName = exptectedStreetLabelName;
  
  Assert.areEquals(
    actualStreetLabelName,
    expectedStreetLabelName,
    `street label name is: ${actualStreetLabelName} as expected`
    );
}

const checkStreetInputIsWritable = () => {
  setStreet(address);
  
  let actualStreet = getStreetValue();
  let expectedStreet = address;
  
  Assert.areEquals(actualStreet, expectedStreet, "text wrote in street succesfully");
}


const fillCityInput = () => {
  let addressFromSteetValue = getStreetValue();
  let city = getFirstWord(addressFromSteetValue);
  
  setCity(city);
}

const fillZipCodeInput = () => {
  let addressFromSteetValue = getStreetValue();
  let zipCode = getLastWord(addressFromSteetValue);
  
  setZipCode(zipCode);
}


module.exports = { 
  checkCustomerNameIsWritable, 
  checkCustomerNameIsDeletable, 
  checkStreetLabelName, 
  checkStreetInputIsWritable,
  fillCityInput,
  fillZipCodeInput
};
