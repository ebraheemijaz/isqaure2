import React, { useContext } from "react";
// import img from "../assets/hero-img.png";
import { DetailsContect } from "./InfoContext";

export default function Hero() {
  const details = useContext(DetailsContect);
  console.log({ details });
  const img =
    import.meta.env.VITE_API_URL + details.banner.image.data.attributes.url;
  return (
    <section id="hero" class="hero section light-background">
      <div class="container">
        <div class="row gy-4 justify-content-center justify-content-lg-between">
          <div class="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h1 data-aos="fade-up">{details.banner.text}</h1>
            <p data-aos="fade-up" data-aos-delay="100">
              We are a team of experts, buying and selling top-quality phones
              just for you."
            </p>
            <div class="d-flex" data-aos="fade-up" data-aos-delay="200">
              <a href="#contact" class="btn-get-started">
                Contact Us
              </a>
            </div>
          </div>
          <div class="col-lg-5 order-1 order-lg-2 hero-img" data-aos="zoom-out">
            <img src={img} class="img-fluid animated" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
