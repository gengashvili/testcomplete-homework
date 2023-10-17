const orderForm = Aliases.Orders.OrderForm;
const customerNameInput = orderForm.Group.Customer;
const cancelButton = Aliases.Orders.wndOrder.ButtonCancel;
const streetLabel = orderForm.Group.label8;
/* 
მოკლედ ეს სელექტორები როგორც გავტესეტე ამ WindowsForms10Window8app0141b42ar8ad1 ის გარეშე პირდაპირ არ წვდება,
მათ შორის არც კლასების კონსტრუქტორიდან იქაც კონსტრუქტორის გარეთ მეთოდში თუ დავწერდი მხოლოდ იმ შემთხვევაშ იღებდა 
ასეთი სინტაქსით - Aliases.Orders.OrderForm.Group.Street/City/Zip
*/
const inputsContainer = Aliases.Orders.wndOrder.WindowsForms10Window8app0141b42ar8ad1;
const streetInput = inputsContainer.Street;
const cityInput = inputsContainer.City;
const zipCodeInput = inputsContainer.Zip;


const setCustomerName = (name) => customerNameInput.Keys(name);

const getCustomerName = () => customerNameInput.wText;

const deleteCustomerName = (name) => {
  customerNameInput.Keys("^a[BS]");
}

const getStreetLabelName = () => streetLabel.WndCaption;

const setStreet = (street) => streetInput.Keys(street);

const getStreetValue =() => streetInput.wText;

const setCity = (city) => cityInput.Keys(city);

const setZipCode = (zipCode) => zipCodeInput.Keys(zipCode)

const closeOrderForm = () => cancelButton.Click();


module.exports = { 
  setCustomerName,
  getCustomerName, 
  closeOrderForm, 
  deleteCustomerName,
  getStreetLabelName,
  getStreetValue,
  setStreet, 
  setCity,
  setZipCode
};