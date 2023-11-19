import { useEffect } from "react";
import { useUserContext } from "../context";
import { SearchIcon } from "../assets";
import { getUsers } from "../services";

export const SearchBar = () => {
  const { searchInput, setSearchInput, setUsers } = useUserContext();

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
    <div className="searchBar">
      <SearchIcon />
      <input
        className="searchBar__input"
        placeholder="Search for GitHub users..."
        value={searchInput}
        onChange={inputHandler}
      />
    </div>
  );
};
