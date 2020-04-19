import HelloWorldComponent from "./HelloWorldComponent";
import {storiesOf} from "@storybook/react";
import React from "react";
import {text, withKnobs} from "@storybook/addon-knobs";

storiesOf("Hello World", module)
    .addDecorator(withKnobs)
    .add("General", () => (
        <HelloWorldComponent userName={text("userName", "Георгий")} />
    ));
