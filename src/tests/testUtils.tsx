import { render } from "@testing-library/react";
import { UserProvider, FavouriteProvider } from "../context";

export const renderWithProviders = (el: React.ReactElement) =>
  render(
    <UserProvider>
      <FavouriteProvider>{el}</FavouriteProvider>
    </UserProvider>
  );
