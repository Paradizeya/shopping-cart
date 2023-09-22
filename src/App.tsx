import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import StorePage from "./pages/StorePage";
import AboutPage from "./pages/AboutPage";
import Nav from "./components/nav/Nav";
import ShoppingCart from "./components/shoppingCart/ShoppingCart";

function App() {
  return (
    <div className="wrapper">
      <Nav />
      <ShoppingCart />
      <main className="page">
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
