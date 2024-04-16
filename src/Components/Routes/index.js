import { Routes, Route } from "react-router-dom";
import Home from "../../Pages/Home";
import Search from "../../Pages/Search";
import Calculator from "../../Pages/Calculator";
import EligibilityChecker from "../../Pages/EligibilityChecker";
import Compare from "../../Pages/Compare";
import Favourites from "../../Pages/Favourites";
import Login from "../../Pages/Login";
import Signup from "../../Pages/Signup";
import UserAccount from "../../Pages/UserAccount";
import SearchResults from "../../Pages/SearchResults";
import CompareResults from "../../Pages/CompareResults";
import Reset from "../../Pages/Reset";

/**
 * This component is used to direct the different pages of the website.
 * The different pages of the website are displayed based on the URL path.
 * @returns AppRoutes component
 */
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/eligibility" element={<EligibilityChecker />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/compare" element={<Compare />} />
      <Route path="/favourites" element={<Favourites />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/useraccount" element={<UserAccount />} />
      <Route path="/searchresults" element={<SearchResults />} />
      <Route path="/compareresults" element={<CompareResults />} />
      <Route path="/reset" element={<Reset />} />
    </Routes>
  );
}

export default AppRoutes;
