function openOrder() {
  TestedApps.Orders.Run();
}

function closeOrder() {
  TestedApps.Orders.Terminate();
}

module.exports = { openOrder, closeOrder };