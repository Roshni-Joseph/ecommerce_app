import React, { useEffect, useState } from 'react'
import axios from "axios"

const AsyncAwait = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Async function to fetch data
    const fetchData = async () => {
        // setLoading(true)
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts1');
            // console.log(response)
            setData(response.data); // Axios automatically parses JSON
            // console.log(response);
        } catch (errormsg) {
            console.log(errormsg);
            setError(errormsg.message); // Handle error
        } 
        // finally {
        //     setLoading(false); // Update loading state
        // }
    };

    const demo = () =>{

    }
    // useEffect to call fetchData on component mount
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default AsyncAwait