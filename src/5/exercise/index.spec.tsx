// import React from 'react';
import { Exercise } from "./";
import { render } from "@testing-library/react";
import { Providers } from "../../Providers";

describe("Fun with Composites", () => {
  it("write some tests!", () => {
    render(
      <Providers>
        <Exercise />
      </Providers>,
    );
    expect(true).toBe(true);
  });
});
