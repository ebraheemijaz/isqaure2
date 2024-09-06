import React, { useContext } from "react";
import { DetailsContect } from "./InfoContext";

export default function Owner() {
  const details = useContext(DetailsContect);
  const img =
    import.meta.env.VITE_API_URL + details?.owner_img?.data?.attributes?.url;
  return (
    <section id="owner" class="chefs section">
      <div class="container section-title" data-aos="fade-up">
        <p>
          <span class="description-title">Owner</span>
        </p>

        <div class="container">
          <div class="row gy-4">
            <div
              class="col-lg-4 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="team-member">
                <div class="member-img">
                  <img src={img} class="img-fluid" alt="" />
                  {/* <div class="social">
                    <a href="">
                      <i class="bi bi-twitter-x"></i>
                    </a>
                    <a href="">
                      <i class="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i class="bi bi-instagram"></i>
                    </a>
                    <a href="">
                      <i class="bi bi-linkedin"></i>
                    </a>
                  </div> */}
                </div>
                <div class="member-info">
                  <h4>{details.owner_name}</h4>
                  <a
                    className="cursor"
                    href={`https://wa.me/${details.whatsapp}`}
                    target="_blank"
                  >
                    <span>{details.whatsapp}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
