"use client";
import React, { useEffect, useState } from 'react'

function Update({ params }) {

    const id = params.userId;

    const [fields, setFields] = useState(
        {
            name: '',
            email: ''
        });

    const handleValueChange = (e) => {
        let key = e.target.name;
        let val = e.target.value
        setFields({ ...fields, [key]: val });
    }


    useEffect(() => {
        getUserDetails();
    }, [])
    const getUserDetails = async () => {
        let data = await fetch(`http://localhost:3000/api/users/${id}`);
        data = await data.json();
        setFields({
            name: data.name,
            email: data.email
        })
    }

    const handleUpdate = async () => {
        let res = await fetch(`http://localhost:3000/api/users/${id}`, {
            method: "PUT",
            body: JSON.stringify(fields)
        })
        let data = await res.json();
        if (data.success) {
            alert("updated")
        } else {
            alert("enter valid information")
        }

    }
    return (
        <div>
            <h1>update Details:</h1>

            <div>
                <label
                    style={{
                        marginRight: '2rem'
                    }} htmlFor="name">Name :</label >
                <input
                    type="text"
                    id='name'
                    name='name'
                    placeholder='enter name'
                    value={fields.name}
                    onChange={(e) => handleValueChange(e)}
                    style={{
                        display: 'block',
                        margin: '10px',
                        height: '30px',
                        width: '300px'

                    }}
                />
            </div>
            <div
                style={{
                    marginTop: '2rem'
                }}>
                <label
                    style={{
                        marginRight: '2rem'
                    }} htmlFor="email">Email :</label >
                <input
                    type="text"
                    id='email'
                    name='email'
                    placeholder='enter email'
                    value={fields.email}
                    style={{
                        display: 'block',
                        margin: '10px',
                        height: '30px',
                        width: '300px'

                    }}
                    onChange={(e) => handleValueChange(e)} />
            </div>
            <button
                onClick={handleUpdate}
                style={{
                    marginTop: '2rem',
                    padding: '10px 20px', background: 'blue',
                    color: 'white',
                    width: '300px',
                    margin: '10px',
                    padding: '10px',
                    borderRadius: '5px',
                    cursor: 'pointer'

                }}>update User</button>
        </div>
    )
}

export default Update