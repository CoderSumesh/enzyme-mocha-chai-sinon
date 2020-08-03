import React from "react";

import Store from "../../../store";
import ConnectedReset from "../reset.connect";

describe("Count", () => {
  let component;
  const props = {
    count: 1,
  };

  beforeEach(() => {
    component = mount(
      <Store>
        <ConnectedReset {...props} />
      </Store>
    );
  });

  it("renders properly", () => {
    expect(component.find("Connect(Reset)")).to.have.length(1);
  });

  it("simulate button click", () => {
    component.find("button").at(0).simulate("click");
  });
});
