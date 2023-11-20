import { renderWithProviders } from "./testUtils";
import App from "../App";

describe("App", async () => {
  it("renders App", () => {
    renderWithProviders(<App />);
  });
});
