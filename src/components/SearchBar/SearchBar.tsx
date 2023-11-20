import { useEffect, useRef } from "react";
import { useUserContext } from "../../context";
import { SearchIcon } from "../../icons";
import { getUsers } from "../../services";

export const SearchBar = () => {
  const { searchInput, setSearchInput, setUsers } = useUserContext();
  const searchInputRef = useRef<HTMLInputElement | null>(null);

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

  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchInput]);

  return (
    <div className="searchBar">
      <SearchIcon />
      <input
        className="searchBar__input"
        placeholder="Search for GitHub users..."
        ref={searchInputRef}
        value={searchInput}
        onChange={inputHandler}
      />
    </div>
  );
};
