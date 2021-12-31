import React from "react";
import { render, screen } from "@testing-library/react";

import App from "./App";

describe("Test search types", () => {
  // test('Displays html', () => {
  //   render(<App />);
  //   screen.debug()
  // });

  // test('Exact match of string without last character', () => {
  //   render(<App />);
  //   expect(screen.getByText('Search')).toBeInTheDocument()
  // }); // Fails

  test("Exact match of string (getByText)", () => {
    render(<App />);
    expect(screen.getByText("Search:")).toBeInTheDocument();
  });

  // Whereas a string argument is used for the exact match, a regular expression can be used for a partial match which is often more convenient
  test("Partial string match using regex (getAllByText)", () => {
    render(<App />);
    expect(screen.getAllByText(/Search/)).toHaveLength(2);
  });

  // Use this to find out what the role options are
  // test('Shows all role options', () => {
  //   render(<App />);
  //   screen.getByRole('');
  // })

  test("Exists an input element (getByRole)", () => {
    render(<App />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  test("Exists a label element (getByLabelText)", () => {
    render(<App />);
    expect(screen.getByLabelText("Search:")).toBeInTheDocument();
  });

  test("Exists placeholder text (getByPlaceholderText)", () => {
    render(<App />);
    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
  });

  test("Exists image (getByAltText)", () => {
    render(<App />);
    expect(screen.getByAltText("profile")).toBeInTheDocument();
  });

  test("Exists input (getByDisplayValue)", () => {
    render(<App />);
    expect(screen.getByDisplayValue("")).toBeInTheDocument();
  });

  test("Exists input (getByTestId)", () => {
    render(<App />);
    expect(screen.getByTestId("search-result")).toBeInTheDocument();
  });
});

describe('Test search variants', () => {
  
  // test('Get by throws error if element not there', () => {
  //   render(<App />)
  //   expect(screen.getByText(/Searches for JavaScript/)).toBeNull();
  // }) // Fails

  // Use queryBy when element shouldn't be there
  test('Text element is not there (queryByText)', () => {
    render(<App />)
    expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();
  }) 

  // Use findBy for async elements that will eventually appear
  test('Renders async component (findByText)', async () => {
    render(<App />)
    expect(screen.queryByText(/Signed in as/)).toBeNull(); // Not there at first - use queryBy
    expect(await screen.findByText(/Signed in as/)).toBeInTheDocument(); // Loaded - use findBy after await
  }) 
})
