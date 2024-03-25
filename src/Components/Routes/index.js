import { Routes, Route } from "react-router-dom";
import Home from "../../Pages/Home";
import Search from "../../Pages/Search";
import Calculator from "../../Pages/Calculator";
import Compare from "../../Pages/Compare";
import Favourites from "../../Pages/Favourites";
import Login from "../../Pages/Login";
import UserAccount from "../../Pages/UserAccount";
import Results from "../../Pages/Results";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/search" element={<Search />}></Route>
      <Route path="/calculator" element={<Calculator />}></Route>
      <Route path="/compare" element={<Compare />}></Route>
      <Route path="/favourites" element={<Favourites />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/useraccount" element={<UserAccount />}></Route>
      <Route path="/results" element={<Results />}></Route>
      <Route path="/test" element={<Test />}></Route>
    </Routes>
  );
}

export default AppRoutes;
