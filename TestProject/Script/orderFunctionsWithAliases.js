let ordersView = Aliases.Orders.MainForm.OrdersView;
let customer = Aliases.Orders.OrderForm.Group.Customer;
let ordersForm = Aliases.Orders.OrderForm;


function addOrder(customerName) {
  Aliases.Orders.MainForm.MainMenu.Click("Orders|New order...");
  customer.Click();
  customer.SetText(customerName);
  ordersForm.ButtonOK.ClickButton();
}


function checkOrder(expectedName) {
    ordersView.DblClickItem(expectedName);
    aqObject.CheckProperty(customer, "wText", cmpEqual, expectedName);
    ordersForm.Close();
}


function deleteOrder(customerName) {
  ordersView.ClickItemR(customerName);
  ordersView.PopupMenu.Click("Delete order");
  Aliases.Orders.dlgConfirmation.btnYes.ClickButton();
}


module.exports = { addOrder, checkOrder, deleteOrder };