import React, { useState } from "react";
import DeviceDetails from "../DeviceDetails/DeviceDetails";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import p1 from "../../images/p1.jpg";
import p2 from "../../images/p2.jpg";
import p3 from "../../images/p3.jpg";
import p4 from "../../images/p4.jpg";
import p5 from "../../images/p5.jpg";
import p6 from "../../images/p6.jpg";

export const fakeData = [
  {
    id: 1,
    image: p1,
    name: "Ultrasonic Vascular Doppler Detector",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, atque.",
    price: 1000,
    stock: "12ps",
  },
  {
    id: 2,
    image: p2,
    name: "Fetal Doppler",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, autem.",
    price: 1200,
    stock: "10ps",
  },
  {
    id: 3,
    image: p3,
    name: "Blood And Infusion Warmers",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, atque tahsuse.",
    price: 1200,
    stock: "14ps",
  },
  {
    id: 4,
    image: p4,
    name: "Syringe Destroyer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, atque tahsuse.",
    price: 1200,
    stock: "14ps",
  },
  {
    id: 5,
    image: p5,
    name: "Pulse Oximeter",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, atque tahsuse.",
    price: 1000,
    stock: "12ps",
  },
  {
    id: 6,
    image: p6,
    name: "Infrared Thermometer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, atque tahsuse.",
    price: 1500,
    stock: "14ps",
  },
];
const Device = () => {
  const [deviceinfo, setDeviceInfo] = useState(fakeData);
  return (
    <main>
      <Navbar />

      <section style={{ padding: "0 80px" }}>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          {deviceinfo.map((data) => (
            <DeviceDetails key={data.id} singleData={data}></DeviceDetails>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Device;
