import { useEffect, useState } from "react";
import { getUsers } from "../services/getUsersService";

export const SearchBar = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const userData = await getUsers();
      setUsers(userData);
    };

    fetchData();
  }, []);

  console.log(users);

  return <div>SearchBar</div>;
};
