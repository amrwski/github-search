import { FC } from "react";
import { UserListItem } from "./UserListItem";
import { IUserItem } from "../types";

interface IUserList {
  users: IUserItem[];
}

export const UserList: FC<IUserList> = ({ users }) => {
  const userList =
    users &&
    Object.values(users).map(({ login, id, avatar_url }) => (
      <UserListItem key={id} login={login} avatar={avatar_url} />
    ));

  return <div className="userList">{userList}</div>;
};
