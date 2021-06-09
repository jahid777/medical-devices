import React, { useState } from "react";
import DeviceDetails from "../DeviceDetails/DeviceDetails";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

export const fakeData = [
  {
    id: 1,
    image:
      "https://www.szbestman.com/public/upload/image/20210127/756828c92da94140ddb7b0c85e259211.jpg",
    name: "Ultrasonic Vascular Doppler Detector",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, atque.",
    price: 1000,
    stock: "12ps",
  },
  {
    id: 2,
    image:
      "https://www.szbestman.com/public/upload/image/20200924/d8a695b3f7a898f0103aebe3d9464f2d.jpg",
    name: "Fetal Doppler",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, autem.",
    price: 1200,
    stock: "10ps",
  },
  {
    id: 3,
    image:
      "	https://www.szbestman.com/public/upload/image/20210128/fb2e03f9890d5138ac1c3d607ee3fc37.jpg",
    name: "Blood And Infusion Warmers",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, atque tahsuse.",
    price: 1200,
    stock: "14ps",
  },
  {
    id: 4,
    image:
      "https://www.szbestman.com/public/upload/image/20210129/659cc5cf1b6b1874a2a3e6bb65a166e2.jpg",
    name: "Syringe Destroyer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, atque tahsuse.",
    price: 1200,
    stock: "14ps",
  },
  {
    id: 5,
    image:
      "	https://www.szbestman.com/public/upload/image/20200919/8d470cc3abaf318df4e70383b0021ac3.jpg",
    name: "Pulse Oximeter",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, atque tahsuse.",
    price: 1000,
    stock: "12ps",
  },
  {
    id: 6,
    image:
      "https://www.szbestman.com/public/upload/image/20201112/49b06acd9962c52bb0213a710f89f8ba.jpg",
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
