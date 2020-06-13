import {Task, ToDoList} from "./index";
import {shallow, ShallowWrapper} from "enzyme";
import React from "react";
import {matchers} from "jest-emotion";

let wrapper: ShallowWrapper<React.Component["props"],
    React.Component["state"],
    ToDoList>;

expect.extend(matchers);

const fetchTasks = jest.fn(() => {
    return new Promise<Task[]>((resolve) =>
        resolve([{checked: true, text: "asfd"}])
    );
});
const updateTasks = jest.fn(() => {
    return new Promise<void>((resolve) => resolve());
});

beforeEach(() => {
    wrapper = shallow(
        <ToDoList updateTasks={updateTasks} fetchTasks={fetchTasks} />
    );
});

describe("<Components.ToDoList/> rendering", () => {
    it("renders correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });
    it("should have add button", () => {
        expect(wrapper.find("button")).toHaveLength(1);
    });
});
