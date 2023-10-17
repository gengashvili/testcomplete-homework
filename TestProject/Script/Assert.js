
const Assert = {
  
  areEquals: (actual, expected, succesMessage) => {
    if(actual === expected) {
      Log.Message(actual + " and " + expected + " are equals. " + succesMessage);
    } else {
     Log.Error("expected: " + expected + " but actual value is: " + actual);
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

module.exports ={ Assert };