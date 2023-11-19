import { useState, useEffect } from "react";
import { IUserDetails } from "../types";
import { getUsersById } from "../services";

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

  console.log(fetchedFavourites);

  return (
    <div className="header">
      <div className="header__container">
        <div className="favourites">
          <ul>{fetchedFavourites?.map((id) => <li>{id.login}</li>)}</ul>
        </div>
      </div>
    </div>
  );
};
