var { openOrder, closeOrder } = require("commonFunctions");
var { addOrder, checkOrder } = require("orderFunctionsWithAliases");

function main() {
  openOrder();
  addOrder("name1");
  addOrder("name2");

  
  checkOrder();
  
  //closeOrder();
}

function Test4()
{
  //Moves the mouse cursor to the menu item specified and then simulates a single click.
  Aliases.Orders.MainForm.MainMenu.Click("Orders|New order...");
  //Clicks the 'Customer' object.
  Aliases.Orders.OrderForm.Group.Customer.Click(24, 6);
  //Enters the text 'მ' in the 'Customer' text editor.
  Aliases.Orders.OrderForm.Group.Customer.SetText("მ");
  //Enters '[NumLock]' in the 'Customer' object.
  Aliases.Orders.OrderForm.Group.Customer.Keys("[NumLock]");
  //Enters the text '' in the 'Customer' text editor.
  Aliases.Orders.OrderForm.Group.Customer.SetText("");
  //Enters '~![ReleaseLast][ReleaseLast]' in the 'Customer' object.
  Aliases.Orders.OrderForm.Group.Customer.Keys("~![ReleaseLast][ReleaseLast]");
  //Enters the text 'name' in the 'Customer' text editor.
  Aliases.Orders.OrderForm.Group.Customer.SetText("name");
  //Clicks the 'ButtonOK' button.
  Aliases.Orders.OrderForm.ButtonOK.ClickButton();
  //Clicks the 'OrdersView' object.
  Aliases.Orders.MainForm.OrdersView.Click(99, 78);
  //Moves the mouse cursor to the menu item specified and then simulates a single click.
  Aliases.Orders.MainForm.MainMenu.Click("Orders|New order...");
  //Clicks the 'Customer' object.
  Aliases.Orders.OrderForm.Group.Customer.Click(74, 4);
  //Enters the text 'name2' in the 'Customer' text editor.
  Aliases.Orders.OrderForm.Group.Customer.SetText("name2");
  //Clicks the 'ButtonOK' button.
  Aliases.Orders.OrderForm.ButtonOK.ClickButton();
  //Clicks the 'OrdersView' object.
  Aliases.Orders.MainForm.OrdersView.Click(361, 123);
  //Checks whether the 'wItemCount' property of the Aliases.Orders.MainForm.OrdersView object equals 2.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "wItemCount", cmpEqual, 2);
}