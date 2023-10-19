
const Assert = {
  
  areEquals: (actual, expected, succesMessage) => {
    if(actual === expected) {
      Log.Message(succesMessage);
    } else {
     Log.Error("expected: " + expected + " but actual value is: " + actual);
    }
  },
  
  areNotEquals: (actual, expected, succesMessage) => {
    if(actual !== expected) {
      Log.Message(succesMessage);
    } else {
     Log.Error(expected + " and " + actual + " are equals!");
    }
  },
  
  isEmpty: (item, succesMessage) => {
    if(item.length == 0) {
      Log.Message(succesMessage);
    } else {
      Log.Error("item's length is expected as 0 but it is :" + item.length);
    }
  }
}

module.exports = Assert ;