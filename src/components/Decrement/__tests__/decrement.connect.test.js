import React from "react";

import Store from "../../../store";
import ConnectedDecrement from "../decrement.connect";

describe("Count", () => {
  let component;
  const props = {
    count: 1,
  };

  beforeEach(() => {
    component = mount(
      <Store>
        <ConnectedDecrement {...props} />
      </Store>
    );
  });

  it("renders properly", () => {
    expect(component.find("Connect(Decrement)")).to.have.length(1);
  });

  it("simulate button click", () => {
    component.find("button").at(0).simulate("click");
  });
});
