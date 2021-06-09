import React from "react";
import "./DeviceDetails.css";

const DeviceDetails = (props) => {
  const { image, name, description, price, stock } = props.singleData;
  const handleCourseData = (e, info) => {
    console.log("clicked", info);

    e.preventDefault();
  };
  return (
    <div class="col">
      <div class="card" style={{ height: "450px" }}>
        <img
          style={{ height: "250px" }}
          src={image}
          class="card-img-top"
          alt=""
        />
        <div class="card-body">
          <h5 class="card-title">Product: {name}</h5>
          <p class="card-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius sint
            saepe amet placeat perferendis. Voluptates!
          </p>
        </div>
        <div class="card-footer">
          <button
            class="btn btn-primary"
            onClick={(e) => handleCourseData(e, props.singleData)}
          >
            SEE MORE..
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeviceDetails;
