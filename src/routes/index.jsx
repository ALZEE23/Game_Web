import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Game from "../pages/Game";
import Admin from "../pages/Admin";
import Landing from "../pages/Landing";

export default function RoutesIndex() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/game/" element={<Game />} />
      <Route path="/admin/" element={<Admin />} />
      <Route path="/incommodious/" element={<Home />} />
    </Routes>
  );
}
