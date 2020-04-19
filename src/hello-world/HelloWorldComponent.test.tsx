import HelloWorldComponent from "./HelloWorldComponent";
import {shallow} from "enzyme";
import React from "react";

describe("<HelloWorldComponent/>", () => {
  it("render", () => {
    const rendered = shallow(<HelloWorldComponent userName="Анна" />);
    expect(
        rendered.containsMatchingElement(<div>Hello World, Анна</div>)
    ).toEqual(true);
  });
});
