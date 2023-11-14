import { useEffect, useState } from "react";
// import { VITE_GITHUB_API_TOKEN } from "../../env";

export const SearchBar = () => {
  const [users, setUsers] = useState<string[]>([]);

  const token = import.meta.env.VITE_GITHUB_API_TOKEN;

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await fetch("https://api.github.com/search/users?q=amrwski", {
      headers: {
        Authorization: `token ${token}`,
      },
    });

    const data = await response.json();

    setUsers(data);

    console.log(users);
  };

  return <div>SearchBar</div>;
};
