// HomePage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWifi, faBed, faChildren } from "@fortawesome/free-solid-svg-icons";

export default function HomePage() {
  return (
    <div className="bg-whith">
      <div className="flex justify-between bg-[url('https://i.pinimg.com/564x/ac/63/c5/ac63c507bae1cdb591aea6030a5696b9.jpg')]">
        <div className="relative w-1/2 ml-6">
          <img
            src="https://i.pinimg.com/564x/ac/63/c5/ac63c507bae1cdb591aea6030a5696b9.jpg"
            alt="background"
          />
        </div>
      </div>
      <br></br>
      <div className="text-pink-400 text-center flex items-center justify-center text-6xl font-bold">
        <h1>Welcome to Monchty Hotel</h1>
      </div>

      <br></br>
      <div className="flex justify-center p-10 text-center">
        <div className="flex flex-col items-center mr-10">
          <FontAwesomeIcon
            icon={faWifi}
            size="4x"
            style={{ marginBottom: "15px" }}
          />
          <div className="text-3xl font-bold">Free Wifi</div>
        </div>

        <div className="flex flex-col items-center mr-10">
          <FontAwesomeIcon
            icon={faBed}
            size="4x"
            style={{ marginBottom: "15px" }}
          />
          <div className="text-3xl font-bold">Check-in 2:00 p.m.,</div>
          <div className="text-3xl font-bold">Check-out 12:00 p.m.</div>
        </div>
        <div className="flex flex-col items-center mr-10">
          <FontAwesomeIcon
            icon={faChildren}
            size="4x"
            style={{ marginBottom: "15px" }}
          />
          <div className="text-3xl font-bold">2 children aged 0-11 </div>
          <div className="text-3xl font-bold">stay free</div>
          <div className="text-3xl font-bold">(no extra bed)</div>
        </div>
        {/* Booking Button */}
        <div className="flex flex-col items-center mr-11">
          <Link
            to="/new"
            className="bg-pink-500 text-white p-3 rounded-md text-xl"
          >
            Book Now
          </Link>
        </div>
      </div>
      <div className="flex justify-between p-10 text-gray-600 font-bold">
        <div className="text-black w-1/2 text-3xl">
          <ul>
            <li>188 guestrooms ranging Deluxe to Suite</li>
            <li>
              4 restaurants and bar, Fitness Centre and an outdoor swimming pool
            </li>
            <li>
              One of the largest convention centres capable of accommodating
              1,000 guests
            </li>
            <li>
              The Gold Leaf, Chinese Restaurant, authentic Cantonese cuisine,
              one of the most popular Chinese restaurants in the city
            </li>
            <li>
              Imperial Bar, perfect for coffee, tea and light snacks during the
              day
            </li>
          </ul>
        </div>

        <div className="w-1/2 ml-6">
          <Carousel>
            <div>
             
            </div>
            <div>
              <img
                src="https://i.pinimg.com/564x/50/01/56/5001560053a9e1983f84097fbbadb4ce.jpg"
                alt="hotel image 2"
                style={{ maxWidth: "640px" }}
              />
            </div>
            <div>
              <img
                src="https://i.pinimg.com/564x/32/62/e3/3262e3039bed49a3f463d0c80a8bfc8a.jpg"
                alt="hotel image 3"
                style={{ maxWidth: "640px" }}
              />
            </div>
            <div>
              <img
                src="https://i.pinimg.com/564x/9b/d6/2c/9bd62c61cf5e2a1c3a108a9cebbedb61.jpg"
                alt="room image 1"
                style={{ maxWidth: "640px" }}
              />
            </div>
            <div>
              <img
                src="https://i.pinimg.com/564x/fe/c1/1b/fec11bb8a22b945ad5c6d80175b0d387.jpg"
                alt="room image 2"
                style={{ maxWidth: "640px" }}
              />
            </div>
            <div>
              <img
                src="https://i.pinimg.com/564x/d2/3b/37/d23b37b290e371b75e35350d46670d82.jpg"
                alt="bar image 1"
                style={{ maxWidth: "640px" }}
              />
            </div>
            <div>
              <img
                src="https://i.pinimg.com/564x/72/7b/6d/727b6da086cf1abd67e22e8169ee2c76.jpg"
                alt="restaurants image 1"
                style={{ maxWidth: "640px" }}
              />
            </div>
          </Carousel>
        </div>
      </div>
      <footer className="footer p-10 bg-pink-400 text-base-content font-bold">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
}
