import { lazy, Suspense } from "react";
const HomePage = lazy(() => import("./pages/HomePage"));
const StorePage = lazy(() => import("./pages/StorePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));

import { Route, Routes } from "react-router-dom";
import Nav from "./components/nav/Nav";
import ShoppingCart from "./components/shoppingCart/ShoppingCart";
import LoadingPlaceholder from "./components/loadingPlaceholder/LoadingPlaceholder";
// import HomePage from "./pages/HomePage";
// import StorePage from "./pages/StorePage";
// import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <div className="wrapper">
      <Nav />
      <ShoppingCart />
      <main className="page">
        <Suspense
          fallback={
            <LoadingPlaceholder>Please wait a moment</LoadingPlaceholder>
          }
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/store" element={<StorePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
