import { FC, useEffect, useState } from "react";
import { UserListItem } from "./UserListItem";
import { useUserContext } from "../context";

export const UserList: FC = () => {
  const [favourites, setFavourites] = useState<
    {
      id: string;
      isFavourite: boolean;
    }[]
  >([]);
  const { users } = useUserContext();

  useEffect(() => {
    const storedFavourites = Object.keys(localStorage).map((key) => ({
      id: key.split("_")[1],
      isFavourite: localStorage.getItem(key) === "true",
    }));

    setFavourites(storedFavourites);
  }, []);

  console.log(favourites);

  const userList =
    users &&
    Object.values(users).map(({ login, id, avatar_url }) => (
      <UserListItem key={id} login={login} avatar={avatar_url} id={id} />
    ));

  const noResults = <span>No search results...</span>;

  return <div className="userList">{userList || noResults}</div>;
};
