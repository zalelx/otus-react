import React, { FC, Fragment } from "react";
import { Task, ToDoList } from "./ToDoList";
import { Header } from "./Layouts";
import { Box, Container, CssBaseline, Toolbar } from "@material-ui/core";

export const App: FC<{}> = (props) => {
  const initItems = [...new Array(3)].map((value, index) => ({
    checked: false,
    text: `${index} Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
  }));

  const fetchTasks = (): Promise<Array<Task>> => {
    return new Promise<Array<Task>>((resolve, reject) => {
      setTimeout(() => {
        resolve(initItems);
      }, 1500);
    });
  };
  const updateTasks = (tasks: Array<Task>): Promise<void> => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        console.log("updated tasks: ", tasks);
        resolve();
      }, 2000);
    });
  };

  return (
    <Fragment>
      <CssBaseline />
      <Header />
      <Container>
        <Box my={2}>
          <ToDoList fetchTasks={fetchTasks} updateTasks={updateTasks} />
        </Box>
      </Container>
    </Fragment>
  );
};
