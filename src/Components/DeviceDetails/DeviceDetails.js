import React, { useState } from "react";
import ModalPopUp from "../ModalPopUp/ModalPopUp";
import "./DeviceDetails.css";

const DeviceDetails = (props) => {
  const { image, name, description, price, stock } = props.singleData;
  const [productDtls, setProductDtls] = useState({});
  const handleCourseData = (e, info) => {
    setProductDtls(info);
    openModal();
    e.preventDefault();
  };

  console.log(productDtls, "hey im here");

  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <section>
      <div class="col">
        <div class="card" style={{ height: "480px" }}>
          <img
            style={{ height: "250px" }}
            src={image}
            class="card-img-top"
            alt=""
          />
          <div class="card-body">
            <h5 class="card-title">Product: {name}</h5>
            <p class="card-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
              sint saepe amet placeat perferendis. Voluptates!
            </p>
          </div>
          <div>
            <button
              style={{ width: "100%" }}
              class="btn btn-primary"
              onClick={(e) => handleCourseData(e, props.singleData)}
            >
              SEE MORE..
            </button>
            <ModalPopUp
              productDtls={productDtls}
              modalIsOpen={modalIsOpen}
              closeModal={closeModal}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeviceDetails;
