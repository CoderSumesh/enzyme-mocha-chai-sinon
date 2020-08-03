import React from "react";

import Store from "../../../store";
import ConnectedCount from "../count.connect";

describe("Count", () => {
  let component;
  const props = {
    count: 1,
  };

  beforeEach(() => {
    component = mount(
      <Store>
        <ConnectedCount {...props} />
      </Store>
    );
  });

  it("renders properly", () => {
    expect(component.find("Connect(Count)")).to.have.length(1);
  });

  it("checks count value", () => {
    expect(component.find("h3").text()).to.equal("0");
  });
});
