import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FavouriteList, Header, UserDetail, UserList } from "./components";
import "./styles";

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
