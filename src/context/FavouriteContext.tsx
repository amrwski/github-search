import { createContext, useContext, ReactNode, useState, Dispatch, SetStateAction, FC } from "react";

interface IFavouriteContext {
  showFavourites: boolean;
  setShowFavourites: Dispatch<SetStateAction<boolean>>;
}

const FavouriteContext = createContext<IFavouriteContext | undefined>(undefined);

export const FavouriteProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [showFavourites, setShowFavourites] = useState(false);

  return (
    <FavouriteContext.Provider value={{ showFavourites, setShowFavourites }}>
      {children}
    </FavouriteContext.Provider>
  );
};

export const useFavouriteContext = () => {
  const context = useContext(FavouriteContext);

  if (!context) {
    throw new Error("useFavouriteContext must be used within a FavouriteProvider");
  }

  return context;
};
