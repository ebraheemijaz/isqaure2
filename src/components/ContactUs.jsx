import React, { useContext } from "react";
import { DetailsContect } from "./InfoContext";

export default function ContactUs() {
  const details = useContext(DetailsContect);

  return (
    <section id="contact" class="contact section">
      <div class="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>
          <span style={{ color: "white" }}>Need Help?</span>{" "}
          <span class="description-title">Contact Us</span>
        </p>
      </div>

      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="mb-5">
          {/* <iframe
            style="width: 100%; height: 400px;"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
            frameborder="0"
            allowfullscreen=""
          ></iframe> */}
        </div>

        <div class="row gy-4">
          <div class="col-md-6">
            <div
              class="info-item d-flex align-items-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <i class="icon bi bi-geo-alt flex-shrink-0"></i>
              <div>
                <h3>Address</h3>
                <p>{details.Address}</p>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div
              class="info-item d-flex align-items-center"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <i class="icon bi bi-telephone flex-shrink-0"></i>
              <div>
                <h3>Call Us</h3>
                <p>{details.phone}</p>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div
              class="info-item d-flex align-items-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <i class="icon bi bi-envelope flex-shrink-0"></i>
              <div>
                <h3>Email Us</h3>
                <p>{details.email}</p>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div
              class="info-item d-flex align-items-center"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <i class="icon bi bi-clock flex-shrink-0"></i>
              <div>
                <h3>
                  Shop Timing
                  <br />
                </h3>
                <p>
                  <strong>Mon-Sun:</strong> 11AM - 11PM;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <form
          action="forms/contact.php"
          method="post"
          class="php-email-form"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div class="row gy-4">
            <div class="col-md-6">
              <input
                type="text"
                name="name"
                class="form-control"
                placeholder="Your Name"
                required=""
              />
            </div>

            <div class="col-md-6 ">
              <input
                type="email"
                class="form-control"
                name="email"
                placeholder="Your Email"
                required=""
              />
            </div>

            <div class="col-md-12">
              <input
                type="text"
                class="form-control"
                name="subject"
                placeholder="Subject"
                required=""
              />
            </div>

            <div class="col-md-12">
              <textarea
                class="form-control"
                name="message"
                rows="6"
                placeholder="Message"
                required=""
              ></textarea>
            </div>

            <div class="col-md-12 text-center">
              <div class="loading">Loading</div>
              <div class="error-message"></div>
              <div class="sent-message">
                Your message has been sent. Thank you!
              </div>

              <button type="submit">Send Message</button>
            </div>
          </div>
        </form> */}
      </div>
    </section>
  );
}
