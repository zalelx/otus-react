import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { Task, ToDoList } from "./index";

export default {
  component: ToDoList,
  title: "ToDo List",
  decorators: [withKnobs],
};
export const generalList = () => {
  const toDoItem = {
    checked: false,
    text: "some text",
  };
  const fetchTasks = () =>
    new Promise<Array<Task>>((resolve) => {
      console.log("fetch tasks action");
      resolve([toDoItem]);
    });

  const updateTasks = (tasks: Array<Task>): Promise<void> => {
    return new Promise<void>((resolve) => {
      console.log("update tasks action");
      resolve();
    });
  };
  return <ToDoList fetchTasks={fetchTasks} updateTasks={updateTasks} />;
};
