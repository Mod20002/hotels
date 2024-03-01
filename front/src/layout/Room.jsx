import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Room() {
  return (
    <div>
      <div className=" text-center flex items-center justify-center text-4xl font-bold mt-7">
        <h1>Accommodation</h1>
      </div>
      <div className="flex justify-center mt-9">
        <div className="flex flex-wrap">
          <div className="card w-96 bg-base-100 shadow-xl mr-4 mb-4 transform transition-transform hover:scale-105">
            <div className="card-body">
              <h2 className="card-title">Standard Room</h2>
              <p className="text-base-content">
                {" "}
                (Standard Room) This type of room is a compact accommodation
                featuring essential amenities such as a bed, bathroom,
                television, and air conditioning. It is designed to be small and
                efficient, suitable for solo travelers or couples. The room is
                minimalistic and well-suited for short stays, offering a
                cost-effective option.{" "}
              </p>
              <div className="card-actions">
                <button className="bg-pink-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4">
                  <a href='/new'>Book</a>
                </button>
              </div>
            </div>
            <figure>
              <img
                src="https://i.pinimg.com/564x/2f/92/70/2f92709e1d23c128e2332344ae583079.jpg"
                alt="standard"
              />
            </figure>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl mr-4 mb-4 transform transition-transform hover:scale-105">
            <div className="card-body">
              <h2 className="card-title">Deluxe Room</h2>
              <p className="text-base-content">
                A Deluxe Room is a spacious and lavishly decorated
                accommodation, offering more luxury than a Superior Room. It
                comes with comprehensive amenities such as a large bed, sofa,
                work desk, refrigerator, minibar, large-screen telephone, and a
                bathtub. Suitable for guests seeking a luxurious and comfortable
                stay, it accommodates solo travelers, couples, or small
                families.
              </p>
              <div className="card-actions">
                <button className="bg-pink-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4">
                  <a href='/new'>Book</a>
                </button>
              </div>
            </div>
            <figure>
              <img
                src="https://i.pinimg.com/564x/9e/69/81/9e6981c9ff9de59b64c51e8c2a0ff39e.jpg"
                alt="deluxe"
              />
            </figure>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl mr-4 mb-4 transform transition-transform hover:scale-105">
            <div className="card-body">
              <h2 className="card-title">Suite Room</h2>
              <p className="text-base-content">
                A Suite Room is the largest type of accommodation, often
                featuring a separate living area. It comes with numerous
                amenities such as a large bed, sofa, work desk, refrigerator,
                minibar, kitchenette, dining area, and a spacious bathroom with
                a bathtub. Ideal for guests traveling with a romantic partner or
                a family that desires an extra luxurious and comfortable stay.
              </p>
              <div className="card-actions">
                <button className="bg-pink-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4">
                  <a href='/new'>Book</a>
                </button>
              </div>
            </div>
            <figure>
              <img
                src="https://i.pinimg.com/564x/92/84/e3/9284e391d10f8cc7b0bc3b5f49a2e298.jpg"
                alt="suite"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
