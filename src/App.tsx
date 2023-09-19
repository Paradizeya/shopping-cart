import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import StorePage from "./pages/StorePage";
import AboutPage from "./pages/AboutPage";
import NavBar from "./components/nav/NavBar";
import ShoppingCartWrapper from "./components/shoppingCart/ShoppingCartWrapper";

function App() {
  console.log("render App");

  return (
    <div className="wrapper">
      <NavBar />
      <ShoppingCartWrapper />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
