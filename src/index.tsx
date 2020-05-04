import sum from "./sum";
import ReactDOM from "react-dom";
import React from "react";
import { ToDoList } from "./to-do-list";

console.log(sum(1, 36790));
ReactDOM.render(<ToDoList toDoItems={[]} />, document.getElementById("root"));
