import * as actionTypes from "../actions";

describe("actions", () => {

  it("increment", () => {
    expect(actionTypes.incrementValue()).to.eql({
      type: actionTypes.INCREMENT_VALUE,
    });
  });

  it("decrement", () => {
    expect(actionTypes.decrementValue()).to.eql({
      type: actionTypes.DECREMENT_VALUE,
    });
  });

  it("reset", () => {
    expect(actionTypes.resetValue()).to.eql({
      type: actionTypes.RESET_VALUE,
    });
  });

});
