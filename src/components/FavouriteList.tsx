import { useState, useEffect } from "react";
import { IUserDetails } from "../types";
import { getUsersById } from "../services";
import { UserListItem } from "./UserListItem";

export const FavouriteList = () => {
  const [localFavourites, setLocalFavourites] = useState<number[]>([]);
  const [fetchedFavourites, setFetchedFavourites] = useState<IUserDetails[]>();

  useEffect(() => {
    const storedFavourites = Object.keys(localStorage).reduce((acc: number[], key) => {
      const id = key.split("_")[1];
      const isFavourite = localStorage.getItem(key) === "true";

      if (isFavourite) {
        acc.push(parseInt(id));
      }

      return acc;
    }, []);

    setLocalFavourites(storedFavourites);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (localFavourites.length > 0) {
        const userInfo = await getUsersById(localFavourites);
        setFetchedFavourites(userInfo);
      }
    };

    fetchData();
  }, [localFavourites]);

  const favouriteList =
    fetchedFavourites &&
    Object.values(fetchedFavourites).map(({ login, id, avatar_url }) => (
      <UserListItem key={id} login={login} avatar={avatar_url} id={id} />
    ));

  const noFavourites = <span>You don't have favourites yet...</span>;

  return <div className="userList">{favouriteList || noFavourites}</div>;
};
