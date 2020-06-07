import { ToDoList } from "./index";
import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";

let wrapper: ShallowWrapper<
  React.Component["props"],
  React.Component["state"],
  ToDoList
>;

beforeEach(() => {
  wrapper = shallow(
    <ToDoList
      toDoItems={[
        {
          checked: true,
          text: "some text",
        },
      ]}
    />
  );
});

/*describe("<Components.ToDoList/> rendering", () => {
  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should have add button", () => {
    expect(wrapper.find("button")).toHaveLength(1);
  });
});
describe("<Components.ToDoList/> behavior", () => {

});*/

describe("render with react renderer", () => {
  it("simple", () => {
    const newVar = renderer.create(<ToDoList toDoItems={[]} />);

    expect(newVar).toMatchSnapshot();
  });
});
