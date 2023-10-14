﻿function openApp() {
  TestedApps.Orders.Run();
}

function closeApp() {
  TestedApps.Orders.Terminate();
}

module.exports = { openApp, closeApp };