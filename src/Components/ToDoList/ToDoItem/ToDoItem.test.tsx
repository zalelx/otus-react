import renderer from "react-test-renderer";
import { ToDoItem } from "./index";
import React from "react";
import { shallowToJson } from "enzyme-to-json";
import { shallow } from "enzyme";

const element = (
  <ToDoItem checked onCheck={jest.fn()} onRemove={jest.fn()} task="abc" />
);

describe("render ToDoItem with different renderers", () => {
  it("with react renderer", () => {
    const newVar = renderer.create(element).toJSON();

    expect(newVar).toMatchSnapshot();
  });

  it("with enzyme renderer", () => {
    const json = shallowToJson(shallow(element));

    expect(json).toMatchSnapshot();
  });
});
