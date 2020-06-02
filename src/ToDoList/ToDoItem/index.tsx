import React, { FC } from "react";

interface ToDoItemProps {
  checked: boolean;
  task: string;
}

export const ToDoItem: FC<ToDoItemProps> = ({ task }) => (
  <div>
    {task}
    <button>X</button>
  </div>
);
