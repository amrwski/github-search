import { createContext, useContext, ReactNode, useState, Dispatch, SetStateAction, FC } from "react";
import { IUserItem } from "../types";

interface IUserContext {
  users: IUserItem[];
  setUsers: Dispatch<SetStateAction<IUserItem[]>>;
}

const UserContext = createContext<IUserContext | undefined>(undefined);

export const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [users, setUsers] = useState<IUserItem[]>([]);

  return <UserContext.Provider value={{ users, setUsers }}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }

  return context;
};
