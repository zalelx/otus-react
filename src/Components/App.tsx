import React, { FC, Fragment } from "react";
import { ToDoList } from "./ToDoList";
import { Header } from "./Layouts";
import { Box, Container, CssBaseline, Toolbar } from "@material-ui/core";

export const App: FC<any> = (props) => {
  const initItems = [...new Array(36)].map((value, index) => ({
    checked: false,
    text: `${index} Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
  }));
  return (
    <Fragment>
      <CssBaseline />
      <Header />
      <Container>
        <Box my={2}>
          <ToDoList toDoItems={initItems} />
        </Box>
      </Container>
    </Fragment>
  );
};
