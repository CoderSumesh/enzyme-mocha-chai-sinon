import React from "react";
import sinon from "sinon";

import Increment from "../Increment";

describe("Count", () => {
  let component;
  const props = {
    incrementValue: sinon.spy(),
  };

  beforeEach(() => {
    component = shallow(<Increment {...props} />);
  });

  it("renders properly", () => {
    expect(component.find("button")).to.have.length(1);
  });

  it("simulate button click", () => {
    component.find("button").at(0).simulate("click");
    expect(props.incrementValue.calledOnce).to.equal(true);
  });
});
