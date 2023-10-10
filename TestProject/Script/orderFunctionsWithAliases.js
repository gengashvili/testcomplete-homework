function addOrder(customerName) {
  Aliases.Orders.MainForm.MainMenu.Click("Orders|New order...");
  Aliases.Orders.OrderForm.Group.Customer.Click();
  Aliases.Orders.OrderForm.Group.Customer.SetText(customerName);
  Aliases.Orders.OrderForm.ButtonOK.ClickButton();
}

function checkOrder(expectedName) {
    Aliases.Orders.MainForm.OrdersView.DblClickItem(expectedName);
    aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.Customer, "wText", cmpEqual, expectedName);
    Aliases.Orders.OrderForm.Close();
}

module.exports = { addOrder, checkOrder };