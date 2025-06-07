import { BrowserRouter as Router, Routes, Route } from "react-router"; // use react-router-dom, not "react-router"
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import NotFound from "./pages/OtherPage/NotFound";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/HomePage";
// import About from "./pages/AboutPage"; // create this page
// import Cart from "./pages/CartPage";   // create this page
// import ProductPage from "./pages/ProductPage"; // generic product page, you can pass product type via params
import AppLayout from "./layout/AppLayout";
// import HeaderNav from "./components/header/HeaderNav";
// import AppHeader from "./layout/AppHeader";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppLayout />
      {/* <HeaderNav /> */}
      {/* <AppHeader /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* New routes */}
        {/* <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} /> */}

        {/* Product routes with dynamic segment */}
        {/* <Route path="/product/:category" element={<ProductPage />} /> */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
