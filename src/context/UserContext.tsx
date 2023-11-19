import { createContext, useContext, ReactNode, useState, Dispatch, SetStateAction, FC } from "react";
import { IUserItem } from "../types";

interface IUserContext {
  users: IUserItem[];
  searchInput: string;
  setUsers: Dispatch<SetStateAction<IUserItem[]>>;
  setSearchInput: Dispatch<SetStateAction<string>>;
}

const UserContext = createContext<IUserContext | undefined>(undefined);

export const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [users, setUsers] = useState<IUserItem[]>([]);
  const [searchInput, setSearchInput] = useState("");

  return (
    <UserContext.Provider value={{ users, setUsers, searchInput, setSearchInput }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }

  return context;
};
