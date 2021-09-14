import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("renders without crashing", async () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  const result = await new Promise((resolve) => setTimeout(resolve(10), 1000));

  expect(result).toEqual(10);
});
