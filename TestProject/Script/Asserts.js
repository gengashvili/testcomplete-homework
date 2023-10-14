
class Asserts {
  
  assertTrue(condition) {
    if (condition) {
      Log.Message(`assertion passed`);
    } else {
      Log.Error(`assertion failed`);
    }
  }
  
    assertFalse(condition) {
    if (!condition) {
      Log.Message(`assertion failed as expected`);
    } else {
      Log.Error(`assertion runs succesfylly, but it expectes failure`);
    }
  }
  
  assertEquals(actual, expected) {
    if (actual === expected) {
      Log.Message(`assertion passed`)
    } else {
      Log.Error(`Assertion Failed`);
    }
  }
  
  assertNotEquals(actual, expected) {
    if (actual !== expected) {
      Log.Message(`assertion passed`)
    } else {
      Log.Error(`Assertion Failed`);
    }
  }

}

module.exports = Asserts;