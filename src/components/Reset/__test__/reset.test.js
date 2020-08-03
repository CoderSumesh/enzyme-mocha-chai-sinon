import React from "react";
import sinon from "sinon";

import Reset from "../Reset";

describe("Count", () => {
  let component;
  const props = {
    resetValue: sinon.spy(),
  };

  beforeEach(() => {
    component = shallow(<Reset {...props} />);
  });

  it("renders properly", () => {
    expect(component.find("button")).to.have.length(1);
  });

  it("simulate button click", () => {
    component.find("button").at(0).simulate("click");
    expect(props.resetValue.calledOnce).to.equal(true);
  });
});
