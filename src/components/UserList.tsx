import { FC } from "react";
import { UserListItem } from "./UserListItem";
import { useUserContext } from "../context";

export const UserList: FC = () => {
  const { users } = useUserContext();

  const userList =
    users &&
    Object.values(users).map(({ login, id, avatar_url }) => (
      <UserListItem key={id} login={login} avatar={avatar_url} id={id} />
    ));

  const noResults = <span>No search results...</span>;

  return <div className="userList">{userList || noResults}</div>;
};
