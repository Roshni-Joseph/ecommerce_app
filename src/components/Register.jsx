import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleSubmit = () => {
        const formData = {
            name,
            email,
            password
        }
        console.log('Form Data:', formData);

        localStorage.setItem("register_details", JSON.stringify(formData))

        const data = localStorage.getItem("register_details")
        if(data){
            navigate("/Login")
        }
        else{
            alert('Invalid email or password');
            navigate("/Register")
        }
        console.log(data);
    }

    return (
        <form className='body'>
            <div className=''>
                <label htmlFor="">Name: </label>
                <input
                    style={{ border: '1px solid black', padding: '' }}
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

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
                >Register</button>
        </form>
    )
}

export default Register