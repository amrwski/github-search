import { useEffect, useState } from "react";
import { getUsers } from "../services/getUsersService";
import { SearchIcon } from "../assets/SearchIcon";
import { IUser } from "../types";
import { StarUncheckedIcon } from "../assets/StarUncheckedIcon";
import { StarCheckedIcon } from "../assets/StarCheckedIcon";
import { UserList } from "./UserList";

export const Search = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const userData = await getUsers(searchInput);
      setUsers(userData);
    };

    fetchData();
  }, [searchInput]);

  return (
    <>
      <div className="header">
        <div className="header__container">
          <SearchIcon />
          <input
            className="header__input"
            placeholder="Search for GitHub users..."
            onChange={inputHandler}
          />
          <div className="header__star" onClick={() => setIsChecked(!isChecked)}>
            {isChecked ? <StarCheckedIcon /> : <StarUncheckedIcon />}
          </div>
        </div>
      </div>

      <UserList users={users} />
    </>
  );
};
