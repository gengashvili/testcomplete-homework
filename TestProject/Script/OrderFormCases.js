const HomePage = require("HomePage");
const OrderFormPage = require("OrderFormPage");
const customer = require("CustomerData");
const Asserts = require("Asserts");


class OrderFormCases {
  
  constructor() {
    this.homePage = new HomePage();
    this.orderFormPage = new OrderFormPage();
    this.asserts = new Asserts();
  }
  

  addOrderFromList() {
    this.homePage.clickAddOrderFromList();
    this.orderFormPage.setCustomerName(customer.name);
    this.orderFormPage.clickOnOkBtn();
  }
  

  validateOrderAddedFromList() {
    this.validateOrderAdded(customer.name);
  }
  

  addOrderFromBtn() {
    this.homePage.clickAddOrderFromBtn();
    this.orderFormPage.setCustomerName(customer.name1);
    this.orderFormPage.clickOnOkBtn();
  }

  validateOrderAddedFromBtn() {
    this.validateOrderAdded(customer.name1);
  }
  
  
  validateOrderAdded(customerName) {
    this.homePage.ordersView.DblClickItem(customerName);

    this.asserts.assertEquals(
      this.orderFormPage.customerInput.wText,
      customerName
    );

    this.orderFormPage.ordersForm.Close();
  }
  
  
  checkProductsQuantity() {
    this.homePage.clickAddOrderFromList();
     
    this.asserts.assertEquals(this.orderFormPage.productDropDown.wItemCount,3);
    
    this.orderFormPage.ordersForm.Close();
  }
  
  
  validateQuantityInput() {
    this.homePage.clickAddOrderFromBtn();

    try {
        this.orderFormPage.quantityField.wValue = "letters";
        Log.Message("Value set successfully in Quantity field.");
    } catch (e) {
        Log.Message(`letters cant be written in quantity (expected result) - ${e.message}`)
        }
        
    this.orderFormPage.ordersForm.Close();
  }
  
  
  validatePriceInputs() {
    this.homePage.clickAddOrderFromBtn();
    
    this.orderFormPage.setPrice(customer.pricePerUnit);
    this.orderFormPage.setDiscount(customer.discount);
    this.orderFormPage.setTotal(customer.total);
    
    this.orderFormPage.setCustomerName(customer.name2);
    
    this.orderFormPage.clickOnOkBtn();
    
    this.homePage.ordersView.DblClickItem(customer.name2);
    
    this.asserts.assertNotEquals(this.orderFormPage.priceInput.wText, customer.pricePerUnit);
    
    this.asserts.assertNotEquals(this.orderFormPage.discountInput.wText, customer.discount);
    
    this.asserts.assertNotEquals(this.orderFormPage.totalInput.wText, customer.total);
    
    
     this.orderFormPage.ordersForm.Close();
    
  }
  
  
  validateIvalidDate() {
    this.homePage.clickAddOrderFromBtn();
    
    try {
      this.orderFormPage.setDate(customer.invalidDate);
      Log.Message("invalid date setted in date input");
    } catch(e) {
      Log.Message(`invalid date cant be set in date input as expected - ${e.message}`)
    }
    
    this.orderFormPage.ordersForm.Close();
  }
  
  
}

module.exports = OrderFormCases;