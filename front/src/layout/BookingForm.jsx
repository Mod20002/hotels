import axios from "axios";
import { useState } from "react";

import QR from "../img/QR.jpg";

export default function New() {
  const [input, setInput] = useState({
    title: "",
    dueInt: new Date().toISOString().split("T")[0],
    dueOut: new Date().toISOString().split("T")[0],
    price: "",
  });

  const hdlChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const hdlSubmit = async (e) => {
    try {
      e.preventDefault();
      const output = {
        ...input,
        dueInt: new Date(input.dueInt),
        dueOut: new Date(input.dueOut),
      };
      const token = localStorage.getItem("token");
      const rs = await axios.post("http://localhost:8889/todos", output, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Booking completed");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <form
      className="bg-white shadow-md px-8 pt-6 pb-8 w-3/6 rounded-lg mx-auto mt-16"
      onSubmit={hdlSubmit}
      method="post"
    >
      <div className="text-3xl mb-5 text-center font-bold text-black">
        Booking
      </div>

      <label className="mb-4 form-control w-full text-center items-center">
        <span className="block text-gray-700 text-sm font-bold mb-2">
          Check In
        </span>
        <input
          className="input input-bordered w-full max-w-xs bg-white text-black"
          type="date"
          name="dueInt"
          value={input.dueInt}
          onChange={hdlChange}
        />
      </label>

      <label className="mb-4 form-control w-full text-center items-center">
        <span className="block text-gray-700 text-sm font-bold mb-2">
          Check Out
        </span>
        <input
          className="input input-bordered w-full max-w-xs bg-white text-black"
          type="date"
          name="dueOut"
          value={input.dueOut}
          onChange={hdlChange}
        />
      </label>

      <label className="mb-4 form-control w-full text-center items-center">
        <span className="block text-gray-700 text-sm font-bold mb-2">
          Room Number
        </span>
        <select
          className="input input-bordered w-full max-w-xs bg-white text-black"
          name="title"
          value={input.title}
          onChange={hdlChange}
        >
          {[...Array(20)].map((_, index) => {
            const optionValue = `A${index + 1}`;
            return (
              <option key={optionValue} value={optionValue}>
                {optionValue}
              </option>
            );
          })}
        </select>
      </label>

      <label className="mb-4 form-control w-full text-center items-center">
        <span className="block text-gray-700 text-sm font-bold mb-2">
          Price
        </span>
        <select
          className="input input-bordered w-full max-w-xs bg-white text-black"
          name="price"
          value={input.price}
          onChange={hdlChange}
        >
          <option value="">Please choose</option>
          <option value="1000">1,000 THB</option>
          <option value="2000">2,000 THB</option>
          <option value="3000">3,000 THB</option>
        </select>
      </label>

      <div className="flex justify-center items-center mt-5 mb-5">
        <div className="w-44 shadow-xl">
          <img src={QR} alt="QR Error" className="mx-auto" />
        </div>
      </div>

      <div className="flex  justify-between form-control w-full">
        <button className="btn btn-success mt-7" type="submit">
          SUBMIT
        </button>
        <a href="/" className="btn btn-warning mt-7">
          BACK
        </a>
      </div>
    </form>
  );
}
