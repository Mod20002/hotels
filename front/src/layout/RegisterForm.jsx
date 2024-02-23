import axios from 'axios'
import {useState} from "react";

export default function RegisterForm() {
  const [input, setInput] = useState({
      firstName:'',
      lastName:'',
      email:'',
      phone:'',
      userName:'',
      password:'',
  })

  const hdlChange = e => {
    setInput( prv => ( { ...prv, [e.target.name] : e.target.value } ) )
  }

  const hdlSubmit = async e => {
    try {
      e.preventDefault()
      const rs = await axios.post('http://localhost:8889/auth/register', input)
      console.log(rs)
      if(rs.status === 200) {
        alert('Register Successful')
      }
    }catch(err) {
      console.log( err.message)
    }
 
  }

  return (
    <div className="p-5 border w-4/6 min-w-[500px] mx-auto rounded mt-5 ">
      <div className="text-3xl mb-5">Sing Up</div>
      <form className="flex flex-col gap-2" onSubmit={hdlSubmit}>
      <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">FirstName</span>
          </div>
          <input
            type="text"
            className="input input-bordered w-full max-w-xs"
            name="firstName"
            value={input.firstName}
            onChange={ hdlChange }
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Lastname</span>
          </div>
          <input
            type="text"
            className="input input-bordered w-full max-w-xs"
            name="lastName"
            value={input.lastName}
            onChange={ hdlChange }
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">E-mail</span>
          </div>
          <input
            type="email"
            className="input input-bordered w-full max-w-xs"
            name="email"
            value={input.email}
            onChange={ hdlChange }
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Phone</span>
          </div>
          <input
            type="text"
            className="input input-bordered w-full max-w-xs"
            name="phone"
            value={input.phone}
            onChange={ hdlChange }
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Username</span>
          </div>
          <input
            type="text"
            className="input input-bordered w-full max-w-xs"
            name="userName"
            value={input.userName}
            onChange={ hdlChange }
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Password</span>
          </div>
          <input
            type="password"
            className="input input-bordered w-full max-w-xs"
            name="password"
            value={ input.password }
            onChange={ hdlChange }
          />
        </label>
        
        
        <div className="flex gap-5 ">
          <button type="submit" className="btn btn-outline btn-success mt-7">Submit</button>
          <button type="reset" className="btn btn-outline btn-error mt-7">Reset</button>
        </div>
      </form>
    </div>
  );
}
