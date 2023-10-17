
const openOrderForm = () => {
  // სელექტორის ფუნქციის გარეთ დაწერა აჯობებდა, მაგრამ შემდეგ ვეღარ პულობს:)
  let mainMenu = Aliases.Orders.MainForm.MainMenu; 
  mainMenu.Click("Orders|New order...");
}


module.exports = { openOrderForm };