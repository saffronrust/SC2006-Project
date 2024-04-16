import "./App.css"
import AppHeader from "./Components/Header";
import AppFooter from "./Components/Footer";
import PageContent from "./Components/PageContent";
import { BrowserRouter } from "react-router-dom";

/**
 * This component is used to display the main app.
 * It contains the header, footer and the main content of the app.
 * The main content of the app changes based on the URL path.
 * @returns App component
 */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppHeader />
        <PageContent />
        <AppFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;