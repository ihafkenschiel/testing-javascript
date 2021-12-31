import React from "react";
import { render, screen } from "@testing-library/react";

import App from "./App";

describe("renders App component", () => {
  // test('Displays html', () => {
  //   render(<App />);
  //   screen.debug()
  // });

  // test('Exact match of string without last character', () => {
  //   render(<App />);
  //   expect(screen.getByText('Search')).toBeInTheDocument()
  // }); // Fails

  test("Exact match of string", () => {
    render(<App />);
    expect(screen.getByText("Search:")).toBeInTheDocument();
  });

  // Whereas a string argument is used for the exact match, a regular expression can be used for a partial match which is often more convenient
  test("Partial string match using regex", () => {
    render(<App />);
    expect(screen.getAllByText(/Search/)).toHaveLength(2);
  });

  // Use this to find out what the role options are
  // test('Shows all role options', () => {
  //   render(<App />);
  //   screen.getByRole('');
  // })

  test("Exists an input element (by role)", () => {
    render(<App />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  test("Exists a label element (by Label Text)", () => {
    render(<App />);
    expect(screen.getByLabelText("Search:")).toBeInTheDocument();
  });

  test("Exists placeholder text", () => {
    render(<App />);
    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
  });

  test("Exists image (by Alt Text)", () => {
    render(<App />);
    expect(screen.getByAltText("profile")).toBeInTheDocument();
  });

  test("Exists input (by Display Value)", () => {
    render(<App />);
    expect(screen.getByDisplayValue("")).toBeInTheDocument();
  });

  test("Exists input (by Test ID)", () => {
    render(<App />);
    expect(screen.getByTestId("search-result")).toBeInTheDocument();
  });
});
