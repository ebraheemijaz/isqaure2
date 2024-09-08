import React from "react";
import img from "../assets/item.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function SingleProduct({ data }) {
  const navigate = useNavigate();

  const img =
    import.meta.env.VITE_API_URL +
    data?.attributes?.Image.data[0].attributes.url;

  return (
    <div
      class="col-lg-4 menu-item cursor"
      onClick={() => {
        navigate(`/product/${data.id}`);
      }}
    >
      <Link to="#" class="glightbox">
        <img
          src={img}
          class="menu-img img-fluid"
          style={{ borderRadius: "47px", border: "2px solid" }}
          alt=""
        />
      </Link>
      <h4 style={{ color: "white" }}>{data?.attributes?.Name}</h4>
      <p class="ingredients" style={{ color: "white" }}>
        {data?.attributes?.brand?.data?.attributes?.Name}
      </p>
      <p class="price">{data?.attributes?.Price}</p>
    </div>
  );
}
