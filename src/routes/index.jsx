import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "./private";

import Home from "../pages/Home";
import Game from "../pages/Game";
import Admin from "../pages/Admin";
import Landing from "../pages/Landing";
import Login from "../pages/Login";

export default function RoutesIndex() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/game/:id" element={<Game />} />
      <Route
        path="/admin/"
        element={
          <PrivateRoutes>
            <Admin />
          </PrivateRoutes>
        }
      />
      <Route path="/incommodious/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
