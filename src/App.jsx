import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Choose from "./components/Choose";
import Products from "./components/Products";
import Owner from "./components/Owner";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import AOS from "aos";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import Loader from "./components/Loader";
import InfoContext from "./components/InfoContext";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Hero />
          <About />
          <Choose />
          <Products />
          <Owner />
          <ContactUs />
          <Footer />
        </>
      ),
    },
    {
      path: "/product/:id",
      element: (
        <>
          <Header />
          <ProductDetail />
          <Footer />
        </>
      ),
    },
  ]);

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <>
      {/* <Loader /> */}
      <InfoContext>
        <main class="main">
          <RouterProvider router={router} />
        </main>
      </InfoContext>
    </>
  );
}

export default App;
