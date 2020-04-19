import sum from "./sum";
import HelloWorldComponent from "./hello-world/HelloWorldComponent";
import ReactDOM from "react-dom";
import React from "react";

console.log(sum(1, 36790));
ReactDOM.render(
    <HelloWorldComponent userName={"Петя"} />,
    document.getElementById("root")
);
