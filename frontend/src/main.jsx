import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HomePage from "./landing-page/home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router";
import Signup from "./landing-page/signup/Signup";
import About from "./landing-page/about/AboutPage";
import Product from "./landing-page/product/ProductPage";
import Pricing from "./landing-page/pricing/PricingPage";
import Support from "./landing-page/support/SupportPage";
import Footer from "./landing-page/Footer";
import TopNav from "./landing-page/TopNav";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <TopNav />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<About />} />
      <Route path="/product" element={<Product />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/support" element={<Support />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
