import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import React from "react";
import List from "../components/List";

test("list.tsx div", () => {
  render(<List />);
  const hl = screen.getByText(/HELLO WORLD/i);
  expect(hl).toBeInTheDocument();
});
