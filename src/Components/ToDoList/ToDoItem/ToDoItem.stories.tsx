import { storiesOf } from "@storybook/react";
import { boolean, text, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import { ToDoItem } from "./index";
import { action } from "@storybook/addon-actions";

storiesOf("ToDo item", module)
  .addDecorator(withKnobs)
  .add("General", () => {
    const task = text("task content", "some task");
    return (
      <ToDoItem
        checked={boolean("crossedOut", false)}
        onCheck={action("onCheck action")}
        task={task}
        onRemove={action("onRemove action")}
      />
    );
  });
