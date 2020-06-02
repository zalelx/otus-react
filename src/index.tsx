import ReactDOM from "react-dom";
import React from "react";
import { ToDoList } from "./ToDoList";
import { css } from "@emotion/core";

ReactDOM.render(<ToDoList toDoItems={[]} />, document.getElementById("root"));
