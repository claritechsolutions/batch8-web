import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataPost = () => {
    // const data = { name: 'name', job: 'job' };
    // axios.post('https://reqres.in/api/users', data)
    //   .then(response => {
    //     console.log("Status: ", response.status);
    //     console.log("Data: ", response.data);
    //   }).catch(error => {
    //     console.error('Something went wrong!', error);
    //   });

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [data, setData] = useState('');

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/`)
            .then(response => {
                //console.log("RESPONSE ==>", response);
                setData(response.data)
            })
            .catch(error => {
                console.log("ERROR ==>", error);
            })
    }, [])

    const handleSubmit = () => {
        const data = {
            name, email
        };

    axios.post('https://jsonplaceholder.typicode.com/users', data)
        .then(response => {
            console.log("data posted into json file", response.data);
        })
        .catch(error => {
            console.log("ERROR ==>", error);
        })
    }
    return (
        <div className="container p-3">
            <h5 className="d-inline-block mb-3">POST request using axios</h5>
                <div className="form-group">
                    <label htmlFor="name">Enter Your Name here</label>
                    <input type="text" className="form-control"  id="name" value={name} onChange={e => setName(e.target.value)} />
                    <label htmlFor="email" className="mt-2">Enter Your Email Id here</label>
                    <input type="text" className="form-control" id="email" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
            <button type="submit" className="btn btn-warning mt-3" onClick={handleSubmit}>Submit</button>
        </div >
    )

}
export default DataPost