import React, { Component } from "react";
import { ToDoItem } from "./to-do-item";

interface Props {
  toDoItems: Array<Task>;
}

interface Task {
  checked: boolean;
  text: string;
}

interface State {
  toDoItems: Array<Task>;
}

export class ToDoList extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      toDoItems: props.toDoItems,
    };
  }

  createTask = () => {
    this.setState(({ toDoItems }) => {
      toDoItems.push({ checked: false, text: "abc" });
      return {
        toDoItems: toDoItems,
      };
    });
  };

  render() {
    return (
      <div>
        <div>
          {this.state.toDoItems.map((value: Task, index: number) => (
            <ToDoItem checked={value.checked} task={value.text} key={index} />
          ))}
        </div>
        <button onClick={this.createTask}>Add</button>
      </div>
    );
  }
}
