import { useEffect, useState } from "react";
import { getUsers } from "../services/getUsersService";
import { User } from "../Types/";

export const UserSearch = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchInput, setSearchInput] = useState("");

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

  const x = users && Object.values(users).map((user) => <p>{user.login}</p>);

  console.log(users);

  return (
    <div>
      <input placeholder="Search for GitHub users..." onChange={inputHandler} />

      {x}
    </div>
  );
};