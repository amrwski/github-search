import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUserDetails } from "../services";
import { IUserDetails } from "../types";

export const UserDetail = () => {
  const [userDetails, setUserDetails] = useState<IUserDetails>();
  const { username } = useParams<{ username: string }>();

  useEffect(() => {
    const fetchData = async () => {
      const userInfo = username && (await getUserDetails(username));
      setUserDetails(userInfo);
    };

    fetchData();
  }, [username]);

  return (
    <div className="userContainer">
      <img className="userContainer__img" src={userDetails?.avatar_url} alt="User avatar" />
      <div className="userContainer__info">
        <div className="info__name"></div>
        <div className="info__login"></div>
        <div className="info__about"></div>
        <div className="info__stats">
          <div className="stats__followers"></div>
          <div className="stats_following"></div>
          <div className="stats_repos"></div>
        </div>
      </div>
      <div className="userContainer_star"></div>
    </div>
  );
};
