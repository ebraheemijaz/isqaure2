import React, { useContext } from "react";
// import about from "../assets/about.jpg";
// import about2 from "../assets/about-2.jpg";
import { DetailsContect } from "./InfoContext";

export default function About() {
  const details = useContext(DetailsContect);
  console.log({ details });
  const about =
    import.meta.env.VITE_API_URL + details.shop_image_1.data.attributes.url;

  const about2 =
    import.meta.env.VITE_API_URL + details.shop_image_2.data.attributes.url;

  return (
    <>
      <section id="about" class="about section">
        <div class="container section-title" data-aos="fade-up">
          <h2>
            About Us
            <br />
          </h2>
          <p>
            <span style={{ color: "white" }}>Learn More</span>{" "}
            <span class="description-title">About Us</span>
          </p>
        </div>
        <div class="container">
          <div class="row gy-4">
            <div class="col-lg-7" data-aos="fade-up" data-aos-delay="100">
              <img src={about} class="img-fluid mb-4" alt="" />
              <div class="book-a-table">
                <h3 style={{ color: "white" }}>Contact Us</h3>
                <a
                  className="cursor"
                  href={`https://wa.me/${details.whatsapp}`}
                  target="_blank"
                >
                  <p>{details.phone}</p>
                </a>
              </div>
            </div>
            <div class="col-lg-5" data-aos="fade-up" data-aos-delay="250">
              <div class="content ps-0 ps-lg-5">
                {/* <p class="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p> */}
                {/* <ul>
                  <li>
                    <i class="bi bi-check-circle-fill"></i>{" "}
                    <span>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </span>
                  </li>
                  <li>
                    <i class="bi bi-check-circle-fill"></i>{" "}
                    <span>
                      Duis aute irure dolor in reprehenderit in voluptate velit.
                    </span>
                  </li>
                  <li>
                    <i class="bi bi-check-circle-fill"></i>{" "}
                    <span>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate
                      trideta storacalaperda mastiro dolore eu fugiat nulla
                      pariatur.
                    </span>
                  </li>
                </ul> */}
                <p style={{ color: "white" }}>
                  Looking to buy or sell a phone? Our shop offers a hassle-free
                  experience with top-notch deals on the latest devices. Whether
                  you're upgrading to the newest model or looking to sell your
                  old phone, we ensure competitive prices, expert service, and a
                  smooth transaction. Let us help you find the perfect phone or
                  get the best value for your trade-in!
                </p>

                <div class="position-relative mt-4">
                  <img src={about2} class="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
