"use client";
import Link from 'next/link';
import React, { useState } from 'react'

function AddUser() {

    const [data, setData] = useState({ name: '', email: '' }); //store data

    const handleChange = (event) => {
        let key = event.target.name;
        let value = event.target.value;
        setData({ ...data, [key]: value });
    }

    // post the data in database...
    const addUser = async () => {
        let res = await fetch('http://localhost:3000/api/user', {
            method: 'POST',
            body: JSON.stringify(data)
        });
        res = await res.json();
        if (res.success) {
            alert('updated');
        }
        else {
            alert(res.result);
        }
    }

    return (
        <div>
            <h2>AddUser</h2>
            <div>
                <input type="text" placeholder='Enter name' name='name' value={data.name} onChange={(e) => handleChange(e)} />
                <input type="text" placeholder='Enter email' name='email' value={data.email} onChange={(e) => handleChange(e)} />
                <button onClick={addUser}>Add user</button>
            </div>
            <Link href={'/about'}> Back to about</Link>
        </div>
    )
}

export default AddUser