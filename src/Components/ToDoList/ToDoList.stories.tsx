import { storiesOf } from "@storybook/react";
import React from "react";
import { boolean, text, withKnobs } from "@storybook/addon-knobs";
import { Task, ToDoList } from "./index";
import { action } from "@storybook/addon-actions";

storiesOf("ToDo list", module)
  .addDecorator(withKnobs)
  .add("General", () => {
    const toDoItem = {
      checked: boolean("checked", false),
      text: text("task text", "some text"),
    };
    const fetchTasks = () =>
      new Promise<Array<Task>>((resolve) => {
        action("fetch tasks action");
        resolve([toDoItem]);
      });

    const updateTasks = (tasks: Array<Task>): Promise<void> => {
      return new Promise<void>((resolve) => {
        action("update tasks action");
        resolve();
      });
    };
    return <ToDoList fetchTasks={fetchTasks} updateTasks={updateTasks} />;
  });
