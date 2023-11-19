import { useLocation, useNavigate } from "react-router-dom";
import { BackArrowIcon } from "../assets/BackArrowIcon";

export const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const userName = location.pathname.split("/user/")[1];

  return (
    <div className="navBar">
      <div className="navBar__container" onClick={() => navigate(-1)}>
        <BackArrowIcon />
      </div>
      <span className="navBar__name">{`@${userName}`}</span>
    </div>
  );
};
