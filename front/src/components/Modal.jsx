// Model.jsx
import axios from "axios";
import { useState, useEffect } from "react";

export default function Modal(props) {
  const { el, closeModal, setTrigger } = props;
  const [input, setInput] = useState({
    title: "",
    dueInt: new Date().toISOString().split("T")[0],
    dueOut: new Date().toISOString().split("T")[0],
    price: "",
    status: "",
  });
  const [status, setStatus] = useState([]);

  useEffect(() => {
    if (status.length) {
      return;
    }
    const run = async () => {
      const token = localStorage.getItem("token");
      const rs = await axios.get("http://localhost:8889/todos/all-status", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setStatus(rs.data.status);
    };
    run();
  }, []);

  useEffect(() => {
    setInput({
      title: el?.title ?? "",
      dueInt: el?.dueInt ?? "",
      dueOut: el?.dueOut ?? "",
      price: el?.price ?? "",
      status: el?.status ?? "",
    });
  }, [el?.id]);

  const hdlChange = (e) => {
    setInput((prv) => ({ ...prv, [e.target.name]: e.target.value }));
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
      const rs = await axios.put(
        `http://localhost:8889/todos/${el.id}`,
        output,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(rs);
      setTrigger((prv) => !prv);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <dialog id="my_modal_2" className="modal">
      <div className="modal-box">
        <form
          className="flex flex-col border rounded w-5/6 mx-auto p-4 gap-4"
          onSubmit={hdlSubmit}
        >
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Todo title</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              name="title"
              value={input.title}
              onChange={hdlChange}
            />
          </label>

          <label className="form-control w-full max-w-[220px]">
            <div className="label">
              <span className="label-text">Check-in</span>
            </div>
            <input
              type="date"
              name="dueInt"
              value={input.dueInt}
              onChange={hdlChange}
            />
          </label>

          <label className="form-control w-full max-w-[220px]">
            <div className="label">
              <span className="label-text">Check-out</span>
            </div>
            <input
              type="date"
              name="dueOut"
              value={input.dueOut}
              onChange={hdlChange}
            />
          </label>

          <select
            className="select select-bordered w-full max-w-xs"
            name="status"
            value={input.status}
            onChange={hdlChange}
          >
            {status.map((el) => (
              <option key={el} value={el}>
                {el}
              </option>
            ))}
          </select>

          <label className="form-control w-full">
            <span className="label">
              Price
            </span>
            <select
              className="select select-bordered w-full max-w-xs"
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

          <button type="submit" className="btn btn-success" onClick={closeModal}>
            Submit
          </button>
          <button type="button" className="btn btn-warning" onClick={closeModal}>
            Cancel
          </button>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}
