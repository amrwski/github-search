import { FC, useCallback, useEffect, useState } from "react";
import PullToRefresh from "react-simple-pull-to-refresh";
import { UserListItem } from "./UserListItem";
import { useUserContext } from "../context";
import { getUsers } from "../services";
import { useDebounce } from "../hooks";

export const UserList: FC = () => {
  const { users, setUsers, searchInput } = useUserContext();
  const [page, setPage] = useState(1);

  const fetchMoreUsers = async () => {
    try {
      const newUsers = await getUsers(searchInput, page + 1);

      if (newUsers.length > 0) {
        setPage(page + 1);
        setUsers((prevUsers) => [...prevUsers, ...newUsers]);
      }
    } catch (error) {
      console.error("Error fetching more users:", error);
    }
  };

  const debouncedFetch = useDebounce(fetchMoreUsers, 300);

  const handleScroll = useCallback(() => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement || document.body;

    if (scrollTop + clientHeight >= scrollHeight - 10) {
      debouncedFetch();
    }
  }, [debouncedFetch]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const userList =
    users &&
    Object.values(users).map(({ login, id, avatar_url }) => (
      <UserListItem key={id} login={login} avatar={avatar_url} id={id} />
    ));

  const noResults = <span>No search results...</span>;

  return (
    <PullToRefresh onRefresh={() => getUsers(searchInput)}>
      <div className="userList">{userList || noResults}</div>
    </PullToRefresh>
  );
};
