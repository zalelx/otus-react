import { storiesOf } from "@storybook/react";
import React from "react";
import { boolean, text, withKnobs } from "@storybook/addon-knobs";
import { ToDoList } from "./index";

storiesOf("ToDo list", module)
  .addDecorator(withKnobs)
  .add("General", () => {
    const toDoItem = {
      checked: boolean("checked", false),
      text: text("task text", "some text"),
    };

    return <ToDoList toDoItems={[toDoItem]} />;
  });
