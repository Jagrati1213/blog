"use client"
import React, { useState } from 'react'

function AddUser() {

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

    const addUser = async () => {
        let response = await fetch('http://localhost:3000/api/users', {
            method: 'POST',
            body: JSON.stringify(fields),
        });
        let data = await response.json();
        if (data.success) {
            alert("new user added");
        } else {
            alert("some error with data..")
        }
    }
    return (
        <div>
            <h1>AddUser Details:</h1>

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
                onClick={addUser}
                style={{
                    marginTop: '2rem',
                    padding: '10px 20px', background: 'blue',
                    color: 'white',
                    width: '300px',
                    margin: '10px',
                    padding: '10px',
                    borderRadius: '5px',
                    cursor: 'pointer'

                }}>Add User</button>
        </div>
    )
}

export default AddUser