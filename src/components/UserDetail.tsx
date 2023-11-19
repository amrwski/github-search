import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUserDetails } from "../services";
import { IUserDetails } from "../types";
import { StarUncheckedIcon } from "../assets";
import { UserStats } from "./UserStats";

export const UserDetail = () => {
  const [userDetails, setUserDetails] = useState<IUserDetails | null>(null);
  const { username } = useParams<{ username: string }>();

  useEffect(() => {
    const fetchData = async () => {
      const userInfo = username && (await getUserDetails(username));
      setUserDetails(userInfo);
    };

    fetchData();
  }, [username]);

  console.log(userDetails);

  const { avatar_url, name, login, bio, followers, following, public_repos } = userDetails || {};

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
        <div className="userContainer_star">
          <StarUncheckedIcon />
        </div>
      </div>
    </div>
  );
};
