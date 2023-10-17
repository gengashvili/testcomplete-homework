
const openApp = () => TestedApps.Orders.Run();

const closeApp = () => TestedApps.Orders.Terminate();


module.exports = { openApp, closeApp };