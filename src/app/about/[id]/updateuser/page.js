"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

function UpdateUser({ params }) {
    const id = params.id;
    const [data, setData] = useState({ name: '', email: '' }); //store data
    const [update, setUpdate] = useState(null);

    const handleChange = (event) => {
        let key = event.target.name;
        let value = event.target.value;
        setData({ ...data, [key]: value });
    }

    // get old data 
    const getUserDetails = async () => {
        let res = await fetch(`http://localhost:3000/api/user/${id}`);
        let data = await res.json();
        if (data.success) {
            setData({
                name: data.result.name,
                email: data.result.email,
            })
        } else {
            return;
        }
    }

    useEffect(() => {
        getUserDetails();
    }, [])

    // put the data in database...
    const updateUser = async () => {
        let res = await fetch(`http://localhost:3000/api/user/${id}`, {
            method: 'PUT',
            body: JSON.stringify(data)
        });
        res = await res.json();
        if (res.success) {
            setUpdate({
                name: res.result.name,
                email: res.result.email
            });
        }
        else {
            alert(res.result);
        }
    }


    return (
        <div>
            <h2>Update User</h2>
            <div>
                <input type="text" placeholder='Enter name' name='name' value={data.name} onChange={(e) => handleChange(e)} />
                <input type="text" placeholder='Enter email' name='email' value={data.email} onChange={(e) => handleChange(e)} />
                <button onClick={updateUser}>update</button>
            </div>
            {
                update &&
                <div>
                    <h4>update data:</h4>
                    <p>{update.name} : {update.email}</p>
                </div>
            }
            <Link href={'/about'}> Back to about</Link>
        </div>
    )
}

export default UpdateUser