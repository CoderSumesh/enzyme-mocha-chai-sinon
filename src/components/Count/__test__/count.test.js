import React from "react";

import Count from "../Count";

describe("Count", () => {
  let component;
  const props = {
    count: 1,
  };

  beforeEach(() => {
    component = shallow(<Count {...props} />);
  });

  it("renders properly", () => {
    expect(component.find("h3")).to.have.length(1);
  });

  it("checks count value", () => {
    expect(component.find("h3").text()).to.equal("1");
  });
});
