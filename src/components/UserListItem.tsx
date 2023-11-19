import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { StarCheckedIcon, StarUncheckedIcon } from "../assets";

interface IUserListItem {
  login: string;
  avatar: string;
  id: number;
}

export const UserListItem: FC<IUserListItem> = ({ login, avatar, id }) => {
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    const storedFavourite = localStorage.getItem(`favourite_${id}`);
    setIsFavourite(!!storedFavourite && JSON.parse(storedFavourite));
  }, [id]);

  const toggleFavourite = () => {
    setIsFavourite(!isFavourite);
    localStorage.setItem(`favourite_${id}`, JSON.stringify(!isFavourite));
  };

  return (
    <Link to={`/user/${login}`} className="listItem">
      <div className="listItem__user">
        <img className="listItem__img" src={avatar} alt="User avatar" />
        <span className="listItem__login">{`@${login}`}</span>
      </div>
      <div className="listItem__favourite" onClick={toggleFavourite}>
        {isFavourite ? <StarCheckedIcon /> : <StarUncheckedIcon />}
      </div>
    </Link>
  );
};
