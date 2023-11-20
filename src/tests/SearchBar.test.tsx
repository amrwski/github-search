import { screen, fireEvent } from "@testing-library/react";
import { renderWithProviders } from "./testUtils";
import { SearchBar } from "../components";

describe("SearchBar component", () => {
  it("renders SearchBar correctly", () => {
    renderWithProviders(<SearchBar />);

    expect(screen.getByTestId("search-input")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Search for GitHub users...")).toHaveClass("searchBar__input");
  });

  it("updates search input value", () => {
    renderWithProviders(<SearchBar />);

    const inputElement = screen.getByTestId("search-input") as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "tom" } });

    expect(inputElement.value).toBe("tom");
  });
});
