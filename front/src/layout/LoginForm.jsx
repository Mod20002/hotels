// import axios from "axios";
// import { useState } from "react";
// import useAuth from "../hooks/useAuth";
// import { Link } from "react-router-dom";

// export default function LoginForm() {
//   const { setUser } = useAuth();
//   const [input, setInput] = useState({
//     userName: "",
//     password: "",
//   });

//   const hdlChange = (e) => {
//     setInput((prv) => ({ ...prv, [e.target.name]: e.target.value }));
//   };

//   const hdlSubmit = async (e) => {
//     try {
//       e.preventDefault();
//       // validation
//       const rs = await axios.post("http://localhost:8889/auth/login", input);
//       console.log(rs.data.token);
//       localStorage.setItem("token", rs.data.token);
//       const rs1 = await axios.get("http://localhost:8889/auth/me", {
//         headers: { Authorization: `Bearer ${rs.data.token}` },
//       });
//       console.log(rs1.data);
//       setUser(rs1.data);
//     } catch (err) {
//       console.log(err.message);
//     }
//   };

//   return (
//     <div className="p-5 border w-4/6 min-w-[500px] mx-auto rounded mt-5 ">
//       <div className="text-3xl mb-5">Please Login</div>
//       <form className="flex flex-col gap-2" onSubmit={hdlSubmit}>
//         <label className="form-control w-full max-w-xs">
//           <div className="label">
//             <span className="label-text">userName</span>
//           </div>
//           <input
//             type="text"
//             className="input input-bordered w-full max-w-xs"
//             name="userName"
//             value={input.userName}
//             onChange={hdlChange}
//           />
//         </label>

//         <label className="form-control w-full max-w-xs">
//           <div className="label">
//             <span className="label-text">password</span>
//           </div>
//           <input
//             type="password"
//             className="input input-bordered w-full max-w-xs"
//             name="password"
//             value={input.password}
//             onChange={hdlChange}
//           />
//         </label>

//         <div className="flex gap-5 ">
//           <button type="submit" className="btn bg-pink-400 mt-7">
//             Login
//           </button>
//         </div>
//         <div className="mt-4">
//         <p>
//         Don't have an account? <Link to="/register" style={{ color: 'red', fontSize: '16px' }}>Register</Link>
//       </p>
//         </div>
//       </form>
//     </div>
//   );
// }

import axios from "axios";
import { useState } from "react";
import useAuth from "../hooks/useAuth";

export default function LoginForm() {
  const { setUser } = useAuth();
  const [input, setInput] = useState({
    userName: "",
    password: "",
  });

  const hdlChange = (e) => {
    setInput((prv) => ({ ...prv, [e.target.name]: e.target.value }));
  };

  const hdlSubmit = async (e) => {
    try {
      e.preventDefault();
      // validation
      const rs = await axios.post("http://localhost:8889/auth/login", input);
      console.log(rs.data.token);
      localStorage.setItem("token", rs.data.token);
      const rs1 = await axios.get("http://localhost:8889/auth/me", {
        headers: { Authorization: `Bearer ${rs.data.token}` },
      });
      console.log(rs1.data);
      setUser(rs1.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="p-5 border w-4/6 min-w-[500px] mx-auto rounded mt-5 ">
      <div className="text-3xl mb-5">Please Login</div>
      <form className="flex flex-col gap-2" onSubmit={hdlSubmit}>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">userName</span>
          </div>
          <input
            type="text"
            className="input input-bordered w-full max-w-xs"
            name="userName"
            value={input.userName}
            onChange={hdlChange}
          />
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">password</span>
          </div>
          <input
            type="password"
            className="input input-bordered w-full max-w-xs"
            name="password"
            value={input.password}
            onChange={hdlChange}
          />
        </label>

        <div className="flex gap-5 ">
          <button type="submit" className="btn btn-outline btn-secondary mt-7">
            Login
          </button>
        </div>
        <div>
         <p>Don't have an account?
          <a className="link link-error"href='/register' > Register</a>
          </p>
        </div> 
      </form>
    </div>
  );
}
