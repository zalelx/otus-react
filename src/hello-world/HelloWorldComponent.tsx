import React, {FC} from "react";

interface HelloWorldComponentProps {
  userName: string;
}

const HelloWorldComponent: FC<HelloWorldComponentProps> = ({userName}) => (
    <div>Hello World, {userName}</div>
);

export default HelloWorldComponent;
