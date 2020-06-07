import React, { Component } from "react";
import { ToDoList } from "./ToDoList";

interface Props {
  fetchTasks: () => Promise<Array<Task>>;
}

interface Task {
  checked: boolean;
  text: string;
}

interface State {
  toDoItems: Array<Task>;
}

export { ToDoList, Props, State, Task };
