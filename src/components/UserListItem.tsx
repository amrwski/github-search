import { FC } from "react";
import { StarUncheckedIcon } from "../assets/StarUncheckedIcon";

interface IUserListItem {
  login: string;
  avatar: string;
}

export const UserListItem: FC<IUserListItem> = ({ login, avatar }) => (
  <>
    <div className="listItem">
      <div className="listItem__user">
        <img className="listItem__img" src={avatar} alt="User avatar" />
        <span className="listItem__login">{login}</span>
      </div>
      <StarUncheckedIcon />
    </div>
  </>
);
