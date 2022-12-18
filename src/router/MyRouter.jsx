import { Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import Page404 from "../components/Page404";
import Register from "../components/Register";

export const MyRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path='*' element={<Page404 />} />
    </Routes>
  );
}