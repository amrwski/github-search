import { FC, useCallback, useEffect, useState } from "react";
import { UserListItem } from "./UserListItem";
import { useUserContext } from "../context";
import { getUsers } from "../services";

export const UserList: FC = () => {
  const { users, setUsers, searchInput } = useUserContext();
  const [page, setPage] = useState(1);

  const fetchMoreUsers = useCallback(async () => {
    try {
      const newUsers = await getUsers(searchInput, page + 1);

      if (newUsers.length > 0) {
        setPage(page + 1);
        setUsers((prevUsers) => [...prevUsers, ...newUsers]);
      }
    } catch (error) {
      console.error("Error fetching more users:", error);
    }
  }, [searchInput, page, setUsers]);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

      if (scrollTop + clientHeight >= scrollHeight - 10) {
        fetchMoreUsers();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fetchMoreUsers]);

  const userList =
    users &&
    Object.values(users).map(({ login, id, avatar_url }) => (
      <UserListItem key={id} login={login} avatar={avatar_url} id={id} />
    ));

  const noResults = <span>No search results...</span>;

  return <div className="userList">{userList || noResults}</div>;
};
