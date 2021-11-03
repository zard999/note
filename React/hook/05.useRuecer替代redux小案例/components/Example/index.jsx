import React from "react";
import Buttons from "./Buttons";
import ShowArea from "./showArea";
import { Color } from "./color";

export default function Example() {
  return (
    <div>
      <Color>
        <ShowArea />
        <Buttons />
      </Color>
    </div>
  );
}
