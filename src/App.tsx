import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles";
import { Header } from "./components/Header";
import { UserList } from "./components/UserList";
import { UserDetail } from "./components/UserDetail";
import { FavouriteList } from "./components/FavouriteList";

const App: FC = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="/user/:username" element={<UserDetail />} />
      <Route path="/favourites" element={<FavouriteList />} />
    </Routes>
  </BrowserRouter>
);

export default App;
