"use client";
import Link from 'next/link';
import React, { useState } from 'react'

function Adduserform({ hostName }) {
    const [data, setData] = useState({ name: '', category: '', company: '', price: '', color: [] }); //store data

    const handleChange = (event) => {
        let key = event.target.name;
        let value = event.target.value;
        setData({ ...data, [key]: value });
    }

    // post the data in database...
    const addUser = async () => {
        let res = await fetch(`${hostName}api/products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),

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

                <input type="text" placeholder='Enter category' name='category' value={data.category} onChange={(e) => handleChange(e)} />

                <input type="text" placeholder='Enter company' name='company' value={data.company} onChange={(e) => handleChange(e)} />

                <input type="text" placeholder='Enter price' name='price' value={data.price} onChange={(e) => handleChange(e)} />

                <input type="text" placeholder='Enter color' name='color' value={data.color} onChange={(e) => handleChange(e)} />


                <button onClick={addUser}>Add user</button>
            </div>
            <Link href={'/about'}> Back to about</Link>
        </div>
    )
}

export default Adduserform