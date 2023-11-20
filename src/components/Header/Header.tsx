import { Link, useLocation } from "react-router-dom";
import { useFavouriteContext } from "../../context";
import { StarCheckedIcon, StarUncheckedIcon } from "../../icons";
import { NavBar, SearchBar } from "../../components";

export const Header = () => {
  const { showFavourites, setShowFavourites } = useFavouriteContext();
  const location = useLocation();

  const isDetailView = location.pathname.includes("/user");
  const isFavouriteView = location.pathname.includes("/favourites");

  return (
    <>
      <div className="header">
        <div className="header__container">
          {isDetailView || isFavouriteView ? <NavBar /> : <SearchBar />}
          <Link
            to={!showFavourites ? "/favourites" : "/"}
            className="header__star"
            onClick={() => setShowFavourites(!showFavourites)}
          >
            {isFavouriteView ? <StarCheckedIcon /> : <StarUncheckedIcon />}
          </Link>
        </div>
      </div>
    </>
  );
};
