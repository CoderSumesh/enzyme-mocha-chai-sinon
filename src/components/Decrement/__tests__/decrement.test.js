import React from "react";
import sinon from "sinon";

import Decrement from "../Decrement";

describe("Count", () => {
  let component;
  const props = {
    decrementValue: sinon.spy(),
  };

  beforeEach(() => {
    component = shallow(<Decrement {...props} />);
  });

  it("renders properly", () => {
    expect(component.find("button")).to.have.length(1);
  });

  it("simulate button click", () => {
    component.find("button").at(0).simulate("click");
    expect(props.decrementValue.calledOnce).to.equal(true);
  });
});
