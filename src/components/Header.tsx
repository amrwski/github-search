import { useState } from "react";
import { useLocation } from "react-router-dom";
import { StarCheckedIcon, StarUncheckedIcon } from "../assets";
import { SearchBar } from "./SearchBar";
import { NavBar } from "./NavBar";

export const Header = () => {
  const [isChecked, setIsChecked] = useState(false);
  const location = useLocation();

  const isDetailView = location.pathname.includes("/user");

  return (
    <>
      <div className="header">
        <div className="header__container">
          {isDetailView ? <NavBar /> : <SearchBar />}
          <div className="header__star" onClick={() => setIsChecked(!isChecked)}>
            {isChecked ? <StarCheckedIcon /> : <StarUncheckedIcon />}
          </div>
        </div>
      </div>
    </>
  );
};
