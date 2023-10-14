
class HomePage {
  
  constructor() {
    // ამ სელექტორს კონსტრუქტორში რომ ვაცხადებ გაშვებისას ვერ პოულობს რატომღაც და ამიტომ დაბლა მეთოდში პირდაპირ ვაკლიკებ
    //this.mainMenu = Aliases.Orders.MainForm.MainMenu;
    this.toolBar = Aliases.Orders.wndWindowsForms10Window8app0141b42ar8ad1.ToolBar;
    this.ordersView = Aliases.Orders.MainForm.OrdersView;
  }
  
  clickAddOrderFromList() {
    Aliases.Orders.MainForm.MainMenu.Click("Orders|New order...");
  }
  
  clickAddOrderFromBtn() {
    this.toolBar.clickItem(4);
  }
  
}

module.exports = HomePage;
