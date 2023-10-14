class OrderFormPage {
  constructor() {
    this.ordersForm = Aliases.Orders.OrderForm;
    this.customerInput = this.ordersForm.Group.Customer;
    this.okBtn = this.ordersForm.ButtonOK;
    this.productDropDown = this.ordersForm.Group.ProductNames;
    this.inputsContainer =Aliases.Orders.wndOrder.WindowsForms10Window8app0141b42ar8ad1;
    this.quantityField =  this.inputsContainer.Quantity;
    this.priceInput =  this.inputsContainer.Price;
    this.discountInput = this.inputsContainer.Discount;
    this.totalInput =  this.inputsContainer.groupBox1.Total;
    this.dateInput =  this.inputsContainer.ExpDate;
  }

  setCustomerName(customerName) {
    this.customerInput.SetText(customerName);
  }

  clickOnOkBtn() {
    this.okBtn.ClickButton();
  }
  
  setPrice(price) {
    this.priceInput.SetText(price);
  }
  
  setDiscount(discount) {
    this.discountInput.SetText(discount);
  }
  
  setTotal(total) {
    this.totalInput.SetText(total);
  }
  
  setDate(date) {
    this.dateInput.wDate = date;
  }
  
}

module.exports = OrderFormPage;