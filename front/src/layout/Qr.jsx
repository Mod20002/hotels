import React from "react";
import { Link } from "react-router-dom";
import QR from "../img/QR.jpg";

export default function Qr() {
  const handleButtonClick = () => {
    alert("Button Clicked!");
    // Add your desired logic or actions here
  };

  return (
    <div className="flex items-center justify-center mt-5 flex-col gap-4">
      <div className="card w-96 bg-base-100 shadow-xl text-center">
        <div className="card-body mt-5">
          <img src={QR} alt="QR Error" className="mx-auto" />
        </div>
      </div>
      <div className="">
        <Link to="/">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md"
            style={{ width: "300px", height: "50px" }}
            onClick={handleButtonClick}
          >
            Success
          </button>
        </Link>
      </div>
    </div>
  );
}
