import React, { FC } from "react";
import { css } from "@emotion/core";

interface ToDoItemProps {
  checked: boolean;
  task: string;
  onCheck: () => void;
}

const style = (checked: boolean) => {
  return css({
    textDecoration: checked ? "line-through" : "inherit",
  });
};

export const ToDoItem: FC<ToDoItemProps> = ({ task, onCheck, checked }) => (
  <div>
    <span css={style(checked)} onClick={onCheck}>
      {task}
    </span>
    <button>X</button>
  </div>
);
