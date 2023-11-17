import { FC } from "react";
import { UserListItem } from "./UserListItem";
import { IUser } from "../types";

interface IUserList {
  users: IUser[];
}

export const UserList: FC<IUserList> = ({ users }) => {
  const userList =
    users &&
    Object.values(users).map(({ login, id, avatar_url }) => (
      <UserListItem key={id} login={login} avatar={avatar_url} />
    ));

  return <>{userList}</>;
};
