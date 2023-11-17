import { Search } from "./components/Search";
import { UserList } from "./components/UserList";
import { useUserContext } from "./context/UserContext";
import "./styles";

const App = () => {
  const { users } = useUserContext();

  return (
    <div className="App">
      <Search />
      <UserList users={users} />
    </div>
  );
};

export default App;
