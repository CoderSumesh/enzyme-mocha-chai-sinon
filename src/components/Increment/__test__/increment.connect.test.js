import React from "react";

import Store from "../../../store";
import ConnectedIncrement from "../increment.connect";

describe("Count", () => {
  let component;
  const props = {
    count: 1,
  };

  beforeEach(() => {
    component = mount(
      <Store>
        <ConnectedIncrement {...props} />
      </Store>
    );
  });

  it("renders properly", () => {
    expect(component.find("Connect(Increment)")).to.have.length(1);
  });

  it("simulate button click", () => {
    component.find("button").at(0).simulate("click");
  });
});
