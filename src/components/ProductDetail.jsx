import React, { useState, useEffect } from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import Loader from "./Loader";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { Link, useParams } from "react-router-dom";

export default function ProductDetail() {
  const [loader, setLoading] = useState(true);
  const [product, setProduct] = useState({});

  const { id } = useParams();

  const getProduct = async () => {
    let url = `${import.meta.env.VITE_API_URL}/api/products/${id}?populate=*`;
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setProduct(data.data || {});
      setLoading(false);
    } catch (error) {
      console.error("Error fetching shop details:", error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const [backgroundPosition, setBackgroundPosition] = useState("center");

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setBackgroundPosition(`${x}% ${y}%`);
  };

  return (
    <>
      {loader && <Loader />}
      {!loader && product?.id && (
        <>
          <div class="page-title" data-aos="fade">
            <div class="container">
              <h1 style={{ color: "white" }}>{product?.attributes?.Name}</h1>
              <nav class="breadcrumbs">
                <ol>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li class="current" style={{ color: "white" }}>
                    {product?.attributes?.Name}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          <section id="portfolio-details" class="portfolio-details section">
            <div class="container" data-aos="fade-up" data-aos-delay="100">
              <div class="row gy-4">
                <div class="col-lg-8">
                  <div class="portfolio-details-slider swiper init-swiper">
                    <Swiper
                      modules={[Navigation, Pagination, Scrollbar, A11y]}
                      spaceBetween={50}
                      slidesPerView={1}
                      navigation
                      pagination={{ clickable: true }}
                      scrollbar={{ draggable: true }}
                      onSwiper={(swiper) => console.log(swiper)}
                      onSlideChange={() => console.log("slide change")}
                    >
                      {product?.attributes?.Image?.data?.map((each) => (
                        <SwiperSlide>
                          <div
                            className="image-container"
                            onMouseMove={handleMouseMove}
                            style={{
                              backgroundPosition,
                              backgroundImage: `url(${
                                import.meta.env.VITE_API_URL +
                                each?.attributes?.url
                              }
                              )`,
                            }}
                          >
                            <img
                              src={
                                import.meta.env.VITE_API_URL +
                                each?.attributes?.url
                              }
                              alt="Sample"
                              className="zoom-image"
                            />
                          </div>
                        </SwiperSlide>
                      ))}
                      {/* <SwiperSlide>
                        <img src={img1} alt="" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={img3} alt="" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={img4} alt="" />
                      </SwiperSlide> */}
                    </Swiper>
                  </div>
                </div>

                <div class="col-lg-4">
                  <div
                    class="portfolio-info"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <h3>Project information</h3>
                    <ul>
                      <li>
                        <strong>Name</strong>: {product?.attributes?.Name}
                      </li>
                      <li>
                        <strong>Category</strong>:
                        {product?.attributes?.category?.data?.attributes?.Name}
                      </li>
                      <li>
                        <strong>Brand</strong>:{" "}
                        {product?.attributes?.brand?.data?.attributes?.Name}
                      </li>
                      <li>
                        <strong>Price</strong>:{" "}
                        <a href="#"> {product?.attributes?.Price}</a>
                      </li>
                    </ul>
                  </div>
                  <div
                    class="portfolio-description"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <h2 style={{ color: "white" }}>Description</h2>

                    {product?.attributes?.Description?.split("\n")?.map(
                      (each, index) => (
                        <p key={index} style={{ color: "white" }}>
                          {each}
                        </p>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
