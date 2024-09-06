import React, { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";

export default function Products() {
  const [allCat, setAllCat] = useState([]);
  const [products, setProducts] = useState([]);
  const [loader, setLoading] = useState(true);
  const [active, setActive] = useState({
    name: "All",
    id: 0,
  });

  const getCat = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/categories`
      );
      const data = await response.json();
      setAllCat(data.data || []);
      // console.log("shop", shopDetails);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching shop details:", error);
    }
  };

  const getProduct = async (cat) => {
    let url = `${import.meta.env.VITE_API_URL}/api/products?populate=*`;
    if (cat !== "all") {
      url = url + `&filters[category]=${cat}`;
    }
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data.data || []);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching shop details:", error);
    }
  };

  useEffect(() => {
    getCat();
  }, []);

  useEffect(() => {
    getProduct(active.name === "All" ? "all" : active.id);
  }, [active]);

  return (
    <section id="products" class="menu section">
      <div class="container section-title" data-aos="fade-up">
        <h2>Products</h2>
        <p>
          <span style={{ color: "white" }}>Check Our</span>&nbsp;
          <font color="#ce1212">Products</font>
        </p>
      </div>
      <div class="container">
        <ul
          class="nav nav-tabs d-flex justify-content-center"
          data-aos="fade-up"
          data-aos-delay="100"
          role="tablist"
        >
          <li
            class="nav-item active"
            role="presentation"
            onClick={() => {
              setActive({
                name: "All",
                id: 0,
              });
            }}
          >
            <a
              className={`nav-link ${active.name === "All" ? "active" : ""}`}
              data-bs-toggle="tab"
              data-bs-target="#menu-starters"
              aria-selected="false"
              role="tab"
              tabindex="-1"
            >
              <h4 style={{ color: "white" }}>All</h4>
            </a>
          </li>
          {allCat.map((each) => (
            <li
              class="nav-item"
              role="presentation"
              key={each.id}
              onClick={() => {
                setActive({
                  name: each.attributes.Name,
                  id: each.id,
                });
              }}
            >
              <a
                className={`nav-link ${
                  active.name === each.attributes.Name ? "active" : ""
                }`}
                data-bs-toggle="tab"
                data-bs-target="#menu-starters"
                aria-selected="false"
                role="tab"
                tabindex="-1"
              >
                <h4 style={{ color: "white" }}>{each.attributes.Name}</h4>
              </a>
            </li>
          ))}

          {/* <li class="nav-item" role="presentation">
            <a
              class="nav-link active"
              data-bs-toggle="tab"
              data-bs-target="#menu-breakfast"
              aria-selected="true"
              role="tab"
            >
              <h4>Category 2</h4>
            </a>
          </li>
          <li class="nav-item" role="presentation">
            <a
              class="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#menu-lunch"
              aria-selected="false"
              tabindex="-1"
              role="tab"
            >
              <h4>Lunch</h4>
            </a>
          </li>

          <li class="nav-item" role="presentation">
            <a
              class="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#menu-dinner"
              aria-selected="false"
              tabindex="-1"
              role="tab"
            >
              <h4>Dinner</h4>
            </a>
          </li> */}
        </ul>

        <div class="tab-content" data-aos="fade-up" data-aos-delay="200">
          <div
            class="tab-pane fade active show"
            id="menu-breakfast"
            role="tabpanel"
          >
            <div class="tab-header text-center">
              <p style={{ color: "white" }}>{active.name} </p>
              <h3>Products</h3>
            </div>
            <div class="row gy-5">
              {products?.map((each) => (
                <React.Fragment key={each.id}>
                  <SingleProduct data={each} />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
