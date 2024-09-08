import React, { useContext } from "react";
import { DetailsContect } from "./InfoContext";

export default function Footer() {
  const details = useContext(DetailsContect);

  return (
    <footer id="footer" class="footer dark-background">
      <div class="container">
        <div class="row gy-3">
          <div class="col-lg-3 col-md-6 d-flex">
            <i class="bi bi-geo-alt icon"></i>
            <div class="address">
              <h4>Address</h4>
              <p>{details.Address}</p>
              <p></p>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 d-flex">
            <i class="bi bi-telephone icon"></i>
            <div>
              <h4>Contact</h4>
              <p>
                <strong>Phone:</strong> <span>{details.phone}</span>
                <br />
                <strong>Email:</strong> <span>{details.email}</span>
                <br />
              </p>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 d-flex">
            <i class="bi bi-clock icon"></i>
            <div>
              <h4> Shop Timing</h4>
              <p>{details.timing}</p>
            </div>
          </div>

          <div class="col-lg-3 col-md-6">
            <h4>Follow Us</h4>
            <div class="social-links d-flex">
              <a href={details.facebook_url} target="_blank" class="facebook">
                <i class="bi bi-facebook"></i>
              </a>
              <a href={details.instagram_url} target="_blank" class="instagram">
                <i class="bi bi-instagram"></i>
              </a>
              <a href={details.ticktok_url} target="_blank" class="tiktok">
                <i class="bi bi-tiktok"></i>
              </a>

              {/*             
              <a href="#" class="twitter">
                <i class="bi bi-twitter-x"></i>
              </a>
              <a href="#" class="facebook">
                <i class="bi bi-facebook"></i>
              </a>
              <a href="#" class="linkedin">
                <i class="bi bi-linkedin"></i>
              </a> */}
            </div>
          </div>
        </div>
      </div>

      <div class="container copyright text-center mt-4">
        <p>
          This website Developed by{"    "}
          <a href="https://ftssolution.tech/" target="_blank">
            FTS Tech
          </a>
          {"   "} +92 310 5860079
        </p>
      </div>
    </footer>
  );
}
