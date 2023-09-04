"use client";
import { baseURL } from '@/utils/dbconnection';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const UserDetails = ({ params }) => {

    const id = params.id;
    const [data, setData] = useState(
        {
            name: '',
            category: '',
            company: '',
            price: '',
            color: ''
        }); //store data
    const [update, setUpdate] = useState(null);

    const handleChange = (event) => {
        let key = event.target.name;
        let value = event.target.value;
        setData({ ...data, [key]: value });
    }

    // get old data 
    const getUserDetails = async () => {
        try {
            let res = await fetch(`${baseURL}/api/products/${id}`);
            let data = await res.json();
            if (data.success) {
                setData({
                    name: data.result.name,
                    price: data.result.price,
                    company: data.result.company,
                    color: data.result.color,
                    category: data.result.category,
                })
            } else {
                return;
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getUserDetails();
    }, [id])

    // put the data in database...
    const updateUser = async () => {
        try {
            let res = await fetch(`${baseURL}/api/products/${id}`, {
                method: 'PUT',
                body: JSON.stringify(data)
            });
            res = await res.json();
            if (res.success) {
                setUpdate({
                    name: data.name,
                    price: data.price,
                    company: data.company,
                    color: data.color,
                    category: data.category,
                })
            }
            else {
                alert(res.result);
            }
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div>
            <h2>Update user</h2>
            <div>
                <input type="text" placeholder='Enter name' name='name' value={data.name} onChange={(e) => handleChange(e)} />

                <input type="text" placeholder='Enter category' name='category' value={data.category} onChange={(e) => handleChange(e)} />

                <input type="text" placeholder='Enter company' name='company' value={data.company} onChange={(e) => handleChange(e)} />

                <input type="text" placeholder='Enter price' name='price' value={data.price} onChange={(e) => handleChange(e)} />

                <input type="text" placeholder='Enter color' name='color' value={data.color} onChange={(e) => handleChange(e)} />


                <button onClick={updateUser}>update</button>
            </div>
            <div>
                {
                    update &&
                    <>
                        <h2>Update data</h2>
                        <p>{update.name}</p>
                        <p>{update.price}</p>
                        <p>{update.company}</p>
                        <p>{update.color}</p>
                        <p>{update.category}</p></>
                }

            </div>
            <Link href={'/about'}> Back to about</Link>
        </div>
    )
}
export default UserDetails;