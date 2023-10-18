

class OrderForm {
  
  constructor() {
    this.orderForm = Aliases.Orders.OrderForm;
    this.customerName = this.orderForm.Group.Customer;
    this.okButton = Aliases.Orders.wndOrder.btnOK;
    this.cancelButton = Aliases.Orders.wndOrder.ButtonCancel;
    //this.cardButtons = Aliases.Orders.OrderForm.Group.FindAllChildren("ClrClassName", "RadioButton");
  }
  
  getCardButtons() {
    return this.orderForm.Group.FindAllChildren("ClrClassName", "RadioButton");
  }
  
  setCardValue(card) {
    this.orderForm.Group.WinFormsObject("CardNo").Keys(card);
  }
  
  getCardValue() {
    this.orderForm.Group.WinFormsObject("CardNo").Keys("^a^c");
    return Sys.Clipboard;
  }
  
  setCustomerName(name) {
    this.customerName.Keys(name);
  }
  
  getCustomerName() {
    return this.customerName.wText;
  }
  
  deleteCustomerName() {
    this.customerName.Keys("^a[BS]");
  }
  
  clickOnOkButton() {
    this.okButton.click();
  }
  
  clickOnCancelButton() {
    this.cancelButton.click();
  }
  
  
  
}


const orderForm = new OrderForm();

module.exports = orderForm;