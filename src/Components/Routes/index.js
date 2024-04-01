import { Routes, Route } from "react-router-dom";
import Home from "../../Pages/Home";
import Search from "../../Pages/Search";
import Calculator from "../../Pages/Calculator";
import Compare from "../../Pages/Compare";
import Favourites from "../../Pages/Favourites";
import Login from "../../Pages/Login";
import Signup from "../../Pages/Signup";
import UserAccount from "../../Pages/UserAccount";
import SearchResults from "../../Pages/SearchResults";
import CompareResults from "../../Pages/CompareResults";

function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/search"
        element={<Search />}
      />
      <Route
        path="/calculator"
        element={<Calculator />}
      />
      <Route
        path="/compare"
        element={<Compare />}
      />
      <Route
        path="/favourites"
        element={<Favourites />}
      />
      <Route
        path="/login"
        element={<Login />}
      />
      <Route
        path="/signup"
        element={<Signup />}
      />
      <Route
        path="/useraccount"
        element={<UserAccount />}
      />
      <Route
        path="/searchresults"
        element={<SearchResults />}
      />
      <Route
        path="/compareresults"
        element={<CompareResults />}
      />
    </Routes>
  );
}

export default AppRoutes;
