import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles";
import { HomePage } from "./components/HomePage";
import { UserDetail } from "./components/UserDetail";

const App: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/user/:username" element={<UserDetail />} />
    </Routes>
  </BrowserRouter>
);

export default App;
