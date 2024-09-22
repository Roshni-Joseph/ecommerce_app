import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const SigninSignup = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
 
    const handleSubmit = () => {
        const formData = {
            // name,
            // email,
            // password
            "Name" : name,
            "Email" : email,
            "Password" : password
        }
        console.log('Form Data:', formData);


        // When adding data to localStorage, the JSON.stringify() method is used to convert
        //  a JavaScript object into a JSON string. This is necessary because localStorage can
        // only store data as strings and cannot store objects directly, Eventhough 
        //this string looks like an object with curly braces, but it is actually just a text representation.

        // localStorage.setItem("register_details", JSON.stringify(formData))


        const data = localStorage.getItem("register_details")
        if(data){
            navigate("/login")
        }
        else{
            navigate("/register")
        }
        console.log(data);
        
    }

    return (
        <form>
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

export default SigninSignup









// import React, { useEffect, useRef, useState } from 'react'
// import './SigninSignup.css';
// import Login from './Login';
// import Home from './Home';

// function SigninSignup() {
//     const name = useRef()
//     const email = useRef()
//     const password = useRef() 
//     const [showHome,setShowHome] = useState(false)
//     const register = localStorage.getItem("Login")

//     useEffect(()=>{
//         if (register) {
//             setShowHome(true)
//         }
//     })
    
//     function handleClick(){
        
//            if (name.current.value&&email.current.value&&password.current.value) {
            
//                 localStorage.setItem("name",name.current.value)
//                 localStorage.setItem("email",email.current.value)
//                 localStorage.setItem("password",password.current.value)
//                 localStorage.setItem("login",email.current.value)
//                 alert("Account Created Successfully")
//                 window.location.reload()
//             }
        
        
//     }
//   return (
//     <div>
//         {showHome?(<Home />):(
//             <div className='container'>
//                 <div className='input_space'>
//                     <input placeholder='Name' type='text' ref={name}></input>
//                 </div>
//                 <div className='input_space'>
//                     <input placeholder='Email' type='text' ref={email}></input>
//                 </div>
//                 <div className='input_space'>
//                     <input placeholder='Password' type='password' ref={password}></input>
//                 </div>
//                 <button onClick={handleClick}>Sign Up</button>
//             </div>
//         )}
//     </div>
//   )
// }

// export default SigninSignup
