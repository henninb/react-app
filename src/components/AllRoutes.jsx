import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Landing from "./Landing";
import HockeyScores from "./HockeyScores";
import Temperature from "./Temperature";
import Home from "./Home";
import EditableTable from "./EditableTable";
import ProtectedRoutes from "./ProtectedRoutes";

export default function AllRoutes() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path="/editable" element={<EditableTable />} />
            <Route path="/landing" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/nhl" element={<HockeyScores />} />
            <Route path="/temperature" element={<Temperature />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/" element={<Home />} />
            </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}
