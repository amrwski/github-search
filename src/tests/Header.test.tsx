import { fireEvent, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { renderWithProviders } from "./testUtils";
import { Header } from "../components";

describe("Header", () => {
  it("renders and allows navigation to Favorites", () => {
    renderWithProviders(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const starIcon = screen.getByTestId("star-icon");
    fireEvent.click(starIcon);

    expect(screen.getByText("Favorites")).toBeInTheDocument();
  });
});
