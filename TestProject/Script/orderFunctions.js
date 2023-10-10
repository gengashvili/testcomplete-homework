function openOrder() {
  TestedApps.Orders.Run();
}

function closeOrder() {
  TestedApps.Orders.Close();
}

function addOrderWithKeywordTest()
{
  //Moves the mouse cursor to the menu item specified and then simulates a single click.
  Aliases.Orders.MainForm.MainMenu.Click("Orders|New order...");
  //Clicks the 'Customer' object.
  Aliases.Orders.OrderForm.Group.Customer.Click(17, 3);
  //Enters the text 'name' in the 'Customer' text editor.
  Aliases.Orders.OrderForm.Group.Customer.SetText("name");
  //Clicks the 'ButtonOK' button.
  Aliases.Orders.OrderForm.ButtonOK.ClickButton();
}



module.exports = {
  openOrder,
  addOrderWithKeywordTest,
  closeOrder
};