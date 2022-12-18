import { Route, Routes } from "react-router-dom";
import Login from "../components/Login";

export const MyRouter = () => {
  return (
    <Routes>
      <Route exact path="/login" element={<Login />} />

    </Routes>
  );
}