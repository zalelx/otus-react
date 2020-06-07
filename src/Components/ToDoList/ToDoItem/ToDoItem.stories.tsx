import { text, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import { ToDoItem } from "./index";
import { action } from "@storybook/addon-actions";

export default {
  component: ToDoItem,
  title: "ToDo Item",
  decorators: [withKnobs],
};
export const notCheckedItem = () => (
  <ToDoItem
    checked={false}
    task={text("task text", "some task")}
    onCheck={action("onCheck")}
    onRemove={action("onRemove")}
  />
);

export const checkedItem = () => (
  <ToDoItem
    checked={true}
    task={text("task text", "some task")}
    onCheck={action("onCheck")}
    onRemove={action("onRemove")}
  />
);
