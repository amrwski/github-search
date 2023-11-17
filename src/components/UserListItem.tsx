import { FC } from "react";

interface IUserListItem {
  login: string;
  avatar: string;
}

export const UserListItem: FC<IUserListItem> = ({ login, avatar }) => {
  return (
    <div className="listItem">
      <img src={avatar} alt="User avatar" />
      <span>{login}</span>
    </div>
  );
};
