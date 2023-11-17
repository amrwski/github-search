import { createContext, useContext, ReactNode, useState, Dispatch, SetStateAction, FC } from "react";
import { IUser } from "../types";

interface IUserContex {
  users: IUser[];
  setUsers: Dispatch<SetStateAction<IUser[]>>;
}

const UserContext = createContext<IUserContex | undefined>(undefined);

export const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [users, setUsers] = useState<IUser[]>([]);

  return <UserContext.Provider value={{ users, setUsers }}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }

  return context;
};
