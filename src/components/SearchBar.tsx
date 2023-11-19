import { useEffect, useState } from "react";
import { getUsers } from "../services";
import { SearchIcon, StarUncheckedIcon, StarCheckedIcon } from "../assets";
import { useUserContext } from "../context";

export const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const { setUsers } = useUserContext();

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const userData = await getUsers(searchInput);
      setUsers(userData);
    };

    fetchData();
  }, [searchInput, setUsers]);

  return (
    <>
      <div className="header">
        <div className="header__container">
          <div className="header__search">
            <SearchIcon />
            <input
              className="header__input"
              placeholder="Search for GitHub users..."
              onChange={inputHandler}
            />
          </div>
          <div className="header__star" onClick={() => setIsChecked(!isChecked)}>
            {isChecked ? <StarCheckedIcon /> : <StarUncheckedIcon />}
          </div>
        </div>
      </div>
    </>
  );
};
