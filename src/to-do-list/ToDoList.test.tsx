import { ToDoList } from "./index";
import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import { ToDoItem } from "./to-do-item";

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

describe("<ToDoList/> rendering", () => {
  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should have add button", () => {
    expect(wrapper.find("button")).toHaveLength(1);
  });
});
describe("<ToDoList/> behavior", () => {
  it("should add ToDoItem when add button is clicked", () => {
    expect(wrapper.find(ToDoItem)).toHaveLength(1);
    wrapper.find("button").first().props().onClick(null);
    expect(wrapper.find(ToDoItem)).toHaveLength(2);
  });
});
