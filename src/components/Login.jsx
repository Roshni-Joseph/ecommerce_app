import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const registeredUser = JSON.parse(localStorage.getItem("register_details"));
    const handleSubmit = () => {
        if (registeredUser) {
          if (registeredUser.email === email && registeredUser.password === password) {
            navigate("/Home")

        } else {
            {<h1>alert('Invalid email or password')</h1>}
            navigate("/Login")
        }
          
        }
      }
  return (
    <form className='body'> 
      <div className=''>
                <label htmlFor="">Email: </label>
                <input
                    style={{ border: '1px solid black', padding: '' }}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className=''>
                <label htmlFor="">Password: </label>
                <input
                    style={{ border: '1px solid black', padding: '' }}
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <button
                style={{ border: '1px solid black', padding: '' }} 
                onClick={handleSubmit}
                >
                Login</button>
        </form>
  )

}

export default Login