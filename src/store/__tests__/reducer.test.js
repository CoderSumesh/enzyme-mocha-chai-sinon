import reducer from "../reducer";
import * as actionTypes from "../actions";

describe("Reducer", () => {
  let initialStore;

  beforeEach(() => {
    initialStore = {
        count: 1,
      };
  });

  it("increment value", () => {
    expect(
      reducer(initialStore, {
        type: actionTypes.INCREMENT_VALUE,
      })
    ).to.eql({
      count: 2,
    });
  });
  
  it("decrement value", () => {
    expect(
      reducer(initialStore, {
        type: actionTypes.DECREMENT_VALUE,
      })
    ).to.eql({
      count: 0,
    });
  });

  it("reset value", () => {
    expect(
      reducer(initialStore, {
        type: actionTypes.RESET_VALUE,
      })
    ).to.eql({
      count: 0,
    });
  });

  it("default value", () => {
    expect(
      reducer(initialStore, {
        type: null,
      })
    ).to.eql(initialStore);
  });
});
