export const UserDetail = () => {
  return (
    <div className="userContainer">
      <img className="userContainer__img" src="" alt="User avatar" />
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
