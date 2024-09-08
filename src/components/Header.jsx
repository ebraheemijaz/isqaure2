import React, { useContext, useState } from "react";
// import logo from "../assets/logo.png";
import InfoContext, { DetailsContect } from "./InfoContext";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const details = useContext(DetailsContect);
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollToSection = (sectionID) => {
    setOpenMobileMenu(false);
    const isHomePage = location.pathname === "/";
    if (!isHomePage) {
      navigate("/");
      setTimeout(() => {
        navigate(`/#${sectionID}`);
        const section = document.getElementById(sectionID);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 200);
    } else {
      navigate(`/#${sectionID}`);
      const section = document.getElementById(sectionID);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const logo =
    import.meta.env.VITE_API_URL + details?.Logo?.data?.attributes?.url;

  return (
    <header
      id="header"
      class={`header sticky-top ${openMobileMenu ? "mobile-nav-active" : ""}`}
    >
      <div class="topbar d-flex align-items-center dark-background">
        <div class="container d-flex justify-content-center justify-content-md-between">
          <div class="contact-info d-flex align-items-center">
            <i class="bi bi-envelope d-flex align-items-center">
              <a href="mailto:contact@example.com">{details.email}</a>
            </i>
            <i class="bi bi-phone d-flex align-items-center ms-4">
              <a
                className="cursor"
                href={`https://wa.me/${details.whatsapp}`}
                target="_blank"
              >
                <span>{details.phone}</span>
              </a>
            </i>
          </div>
          <div class="social-links d-none d-md-flex align-items-center">
            <a href={details.facebook_url} target="_blank" class="facebook">
              <i class="bi bi-facebook"></i>
            </a>
            <a href={details.instagram_url} target="_blank" class="instagram">
              <i class="bi bi-instagram"></i>
            </a>
            <a href={details.ticktok_url} target="_blank" class="tiktok">
              <i class="bi bi-tiktok"></i>
            </a>
          </div>
        </div>
      </div>

      <div class="branding d-flex align-items-cente">
        <div class="container position-relative d-flex align-items-center justify-content-between">
          <Link to="/" class="logo d-flex align-items-center">
            <img src={logo} alt="" />
            {/* <h1 class="sitename">{details?.Name}</h1> */}
          </Link>

          <nav id="navmenu" class="navmenu">
            <ul
              style={{ ...(openMobileMenu ? { background: "#a71515fa" } : {}) }}
            >
              <li>
                <Link
                  to="#hero"
                  class=""
                  style={{ color: "white" }}
                  onClick={() => {
                    handleScrollToSection("hero");
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="#about"
                  class=""
                  style={{ color: "white" }}
                  onClick={() => {
                    handleScrollToSection("about");
                  }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="#products"
                  class=""
                  style={{ color: "white" }}
                  onClick={() => {
                    handleScrollToSection("products");
                  }}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="#owner"
                  class=""
                  style={{ color: "white" }}
                  onClick={() => {
                    handleScrollToSection("owner");
                  }}
                >
                  Owner
                </Link>
              </li>
              <li>
                <Link
                  to="#contact"
                  class=""
                  style={{ color: "white" }}
                  onClick={() => {
                    handleScrollToSection("contact");
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <i
              class={`mobile-nav-toggle d-xl-none bi bi-${
                openMobileMenu ? "x" : "list"
              }`}
              onClick={() => {
                setOpenMobileMenu((prev) => !prev);
              }}
            ></i>
          </nav>
        </div>
      </div>
    </header>
  );
}
