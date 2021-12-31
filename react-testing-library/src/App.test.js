import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'

import App from "./App";

// Search types: Text, Role, PlaceholderText, DisplayValue
// For multiple elements use "All" eg. getAllByRole()
describe("Test search types", () => {
  // test('Displays html', () => {
  //   render(<App />);
  //   screen.debug()
  // });

  // test('Exact match of string without last character', () => {
  //   render(<App />);
  //   expect(screen.getByText('Search')).toBeInTheDocument()
  // }); // Fails

  test("Exact match of string (getByText)", async () => {
    render(<App />);
    // Wait for user to resolve
    await screen.findByText(/Signed in as/);

    expect(screen.getByText("Search:")).toBeInTheDocument();
  });

  // Whereas a string argument is used for the exact match, a regular expression can be used for a partial match which is often more convenient
  test("Partial string match using regex (getAllByText)", async () => {
    render(<App />);
    // Wait for user to resolve
    await screen.findByText(/Signed in as/);

    expect(screen.getAllByText(/Search/)).toHaveLength(2);
  });

  // Use this to find out what the role options are
  // test('Shows all role options', () => {
  //   render(<App />);
  //   screen.getByRole('');
  // })

  test("Exists an input element (getByRole)", async () => {
    render(<App />);
    // Wait for user to resolve
    await screen.findByText(/Signed in as/);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  test("Exists a label element (getByLabelText)", async () => {
    render(<App />);
    // Wait for user to resolve
    await screen.findByText(/Signed in as/);

    expect(screen.getByLabelText("Search:")).toBeInTheDocument();
  });

  test("Exists placeholder text (getByPlaceholderText)", async () => {
    render(<App />);
    // Wait for user to resolve
    await screen.findByText(/Signed in as/);

    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
  });

  test("Exists image (getByAltText)", async () => {
    render(<App />);
    // Wait for user to resolve
    await screen.findByText(/Signed in as/);

    expect(screen.getByAltText("profile")).toBeInTheDocument();
  });

  test("Exists input (getByDisplayValue)", async () => {
    render(<App />);
    // Wait for user to resolve
    await screen.findByText(/Signed in as/);

    expect(screen.getByDisplayValue("")).toBeInTheDocument();
  });

  test("Exists input (getByTestId)", async () => {
    render(<App />);
    // Wait for user to resolve
    await screen.findByText(/Signed in as/);

    expect(screen.getByTestId("search-result")).toBeInTheDocument();
  });
});

// Three search variants: getBy, queryBy and findBy
// which all can be associated with the search types
// For any element that isn't there yet but will be there eventually, use findBy over getBy or queryBy. If you assert for a missing element, use queryBy. Otherwise default to getBy.
describe("Test search variants", () => {
  // test('Get by throws error if element not there', () => {
  //   render(<App />)
  //   expect(screen.getByText(/Searches for JavaScript/)).toBeNull();
  // }) // Fails

  // Use queryBy when element shouldn't be there
  test("Text element is not there (queryByText)", async () => {
    render(<App />);
    // Wait for user to resolve
    await screen.findByText(/Signed in as/);

    expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();
  });

  // Use findBy for async elements that will eventually appear
  test("Renders async component (findByText)", async () => {
    render(<App />);
    expect(screen.queryByText(/Signed in as/)).toBeNull(); // Not there at first - use queryBy
    // screen.debug();
    expect(await screen.findByText(/Signed in as/)).toBeInTheDocument(); // Loaded - use findBy after await
    // screen.debug();
  });
});

describe("Fire events", () => {
  test("Write on input (with fireEvent.change)", async () => {
    render(<App />);
    // Wait for user to resolve
    await screen.findByText(/Signed in as/);

    expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();

    // screen.debug()
    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "JavaScript" },
    });
    // screen.debug()

    expect(screen.getByText(/Searches for JavaScript/)).toBeInTheDocument();
  });

  // fireEvent.change() triggers only a change event whereas userEvent.type triggers a change event, but also keyDown, keyPress, and keyUp events.
  test("Write on input (with userEvent.type)", async () => {
    render(<App />);
    // Wait for user to resolve
    await screen.findByText(/Signed in as/);

    expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();

    // screen.debug()
    await userEvent.type(screen.getByRole("textbox"), 'JavaScript');
    // screen.debug()

    expect(await screen.findByText(/Searches for JavaScript/)).toBeInTheDocument();
  });


});
