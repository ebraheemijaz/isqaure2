import React, { useContext } from "react";
import logo from "../assets/logo.png";
import InfoContext, { DetailsContect } from "./InfoContext";
import { Link } from "react-router-dom";

export default function Header() {
  const details = useContext(DetailsContect);

  return (
    <header id="header" class="header sticky-top">
      <div class="topbar d-flex align-items-center dark-background">
        <div class="container d-flex justify-content-center justify-content-md-between">
          <div class="contact-info d-flex align-items-center">
            <i class="bi bi-envelope d-flex align-items-center">
              <a href="mailto:contact@example.com">{details.email}</a>
            </i>
            <i class="bi bi-phone d-flex align-items-center ms-4">
              <span>{details.phone}</span>
            </i>
          </div>
          <div class="social-links d-none d-md-flex align-items-center">
            <a href={details.facebook_url} target="_blank" class="facebook">
              <i class="bi bi-facebook"></i>
            </a>
          </div>
        </div>
      </div>

      <div class="branding d-flex align-items-cente">
        <div class="container position-relative d-flex align-items-center justify-content-between">
          <Link to="/" class="logo d-flex align-items-center">
            {/* <img src={logo} alt="" /> */}
            <h1 class="sitename">{details?.Name}</h1>
          </Link>

          <nav id="navmenu" class="navmenu">
            <ul>
              <li>
                <Link to="#hero" class="" style={{ color: "white" }}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="#about" class="" style={{ color: "white" }}>
                  About
                </Link>
              </li>
              <li>
                <Link to="#products" class="" style={{ color: "white" }}>
                  Products
                </Link>
              </li>
              <li>
                <Link to="#owner" class="" style={{ color: "white" }}>
                  Owner
                </Link>
              </li>
              <li>
                <Link to="#contact" class="" style={{ color: "white" }}>
                  Contact
                </Link>
              </li>
            </ul>
            <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>
        </div>
      </div>
    </header>
  );
}
