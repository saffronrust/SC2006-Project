import { Routes, Route } from "react-router-dom";
import Home from "../../Pages/Home";
import Search from "../../Pages/Search";
import Calculator from "../../Pages/Calculator";
import Compare from "../../Pages/Compare";
import Favourites from "../../Pages/Favourites";
import Login from "../../Pages/Login";
import UserAccount from "../../Pages/UserAccount";
import SearchResults from "../../Pages/SearchResults";
// import Test from "../../Pages/Test";
import CompareResults from "../../Pages/CompareResults";

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
      <Route path="/searchresults" element={<SearchResults />}></Route>
      {/* <Route path="/test" element={<Test />}></Route> */}
      <Route path="/compareresults" element={<CompareResults />}></Route>
    </Routes>
  );
}

export default AppRoutes;
