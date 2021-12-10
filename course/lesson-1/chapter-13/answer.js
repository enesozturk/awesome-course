import React from "react";

import { render } from "@testing-library/react";

import Editor from "../Editor";

describe("Editor", () => {
  it("should render without error", () => {
    expect(render(<Editor />)).toMatchSnapshot();
  });
});
