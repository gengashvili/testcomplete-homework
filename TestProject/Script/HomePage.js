
class HomePage {
  
  constructor() {
    this.mainForm = Aliases.Orders.MainForm;
    this.ordersView = this.mainForm.OrdersView;
  }
  
  openOrderForm() {
    this.mainForm.MainMenu.Click("Orders|New order...");
  }
  
  openAddedOrder(addedOrderCustomerName) {
     this.ordersView.DblClickItem(addedOrderCustomerName);
  }
  
}

const homePage = new HomePage();

module.exports = homePage ;