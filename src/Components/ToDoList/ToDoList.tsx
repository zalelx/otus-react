import React, { Component } from "react";
import { ToDoItem } from "./ToDoItem";
import { css } from "@emotion/core";
import { Props, State, Task } from "./index";

const style = css({
  display: "grid",
  backgroundColor: "red",
  position: "relative",
});

export class ToDoList extends Component<Props, State> {
  private fetchTasks: () => Promise<Array<Task>>;

  constructor(props: Props) {
    super(props);
    this.fetchTasks = props.fetchTasks;
    this.state = {
      toDoItems: [],
    };
  }

  componentDidMount = () => {
    this.fetchTasks()
      .then((newTasks) =>
        this.setState({
          toDoItems: [...newTasks],
        })
      )
      .catch((error) => console.log(error));
  };

  createTask = () => {
    this.setState(({ toDoItems }) => {
      const newItems = [...toDoItems];
      newItems.push({ checked: false, text: "abc" });
      return {
        toDoItems: newItems,
      };
    });
  };

  checkItem = (index: number) => {
    return () =>
      this.setState(({ toDoItems }) => {
        const newItems = [...toDoItems];
        newItems[index].checked = !newItems[index].checked;
        return {
          toDoItems: newItems,
        };
      });
  };

  removeItem = (index: number) => () => {
    this.setState(({ toDoItems }) => {
      const newItems = [...toDoItems];
      newItems.splice(index, 1);
      return {
        toDoItems: newItems,
      };
    });
  };

  render() {
    return (
      <React.Fragment>
        <div>
          {this.state.toDoItems.map((value: Task, index: number) => {
            return (
              <ToDoItem
                checked={value.checked}
                task={value.text}
                key={index}
                onCheck={this.checkItem(index)}
                onRemove={this.removeItem(index)}
              />
            );
          })}
        </div>
        <button onClick={this.createTask}>Add</button>
      </React.Fragment>
    );
  }
}
