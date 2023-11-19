import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUserByName } from "../services";
import { IUserDetails } from "../types";
import { StarCheckedIcon, StarUncheckedIcon } from "../assets";
import { UserStats } from "./UserStats";

export const UserDetail = () => {
  const [userDetails, setUserDetails] = useState<IUserDetails | null>(null);
  const [isFavourite, setIsFavourite] = useState(false);
  const { username } = useParams<{ username: string }>();
  const { avatar_url, name, login, bio, followers, following, public_repos, id } = userDetails || {};

  useEffect(() => {
    const fetchData = async () => {
      const userInfo = username && (await getUserByName(username));
      setUserDetails(userInfo);
    };

    fetchData();
  }, [username]);

  useEffect(() => {
    const storedFavourite = localStorage.getItem(`favourite_${id}`);
    setIsFavourite(!!storedFavourite && JSON.parse(storedFavourite));
  }, [id]);

  const toggleFavourite = () => {
    setIsFavourite(!isFavourite);
    localStorage.setItem(`favourite_${id}`, JSON.stringify(!isFavourite));
  };

  return (
    <div className="detailWrapper">
      <div className="userContainer">
        <div className="userContainer__infoWrapper">
          <img className="userContainer__img" src={avatar_url} alt="User avatar" />
          <div className="userContainer__info">
            <div className="info__name">{name}</div>
            <div className="info__login">{`@${login}`}</div>
            <div className="info__bio">{bio}</div>
            <div className="info__stats">
              <UserStats number={followers} label="followers" />
              <UserStats number={following} label="following" />
              <UserStats number={public_repos} label="repos" />
            </div>
          </div>
        </div>
        <div onClick={toggleFavourite}>{isFavourite ? <StarCheckedIcon /> : <StarUncheckedIcon />}</div>
      </div>
    </div>
  );
};
