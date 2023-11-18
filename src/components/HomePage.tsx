import { Search } from "./Search";
import { UserList } from "./UserList";
import { useUserContext } from "../context/UserContext";

export const HomePage = () => {
  const { users } = useUserContext();

  return (
    <>
      <Search />
      <UserList users={users} />
    </>
  );
};
