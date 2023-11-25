import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { RegisterEvent } from "../pages/RegisterEvent";
import { Home } from "../pages/Home";
import { MapPage } from "../pages/MapPage";
import { EventDescription } from "../pages/EventDescription";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="cademeutime/login" element={<Login />} />
        <Route path="cademeutime/register" element={<Register />} />
        <Route path="cademeutime/registerEvent" element={<RegisterEvent />} />
        <Route path="cademeutime/" element={<Home />} />
        <Route path="cademeutime/mapPage" element={<MapPage />} />
        <Route path="cademeutime/EventDescription" element={<EventDescription />} />
      </Routes>
    </BrowserRouter>
  );
}
