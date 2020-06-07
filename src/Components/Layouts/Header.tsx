import React, { FC } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Header: FC<{}> = (props) => (
  <React.Fragment>
    <AppBar>
      <Toolbar>
        <Typography variant={"h3"}>My ToDo list</Typography>
      </Toolbar>
    </AppBar>
    <Toolbar />
  </React.Fragment>
);
export default Header;
