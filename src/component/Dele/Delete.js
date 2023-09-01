"use client";
import React from 'react'

function Delete({ id }) {

    const handleDelete = async (id) => {
        let res = await fetch(`http://localhost:3000/api/users/${id}`, {
            method: 'DELETE'
        });
        res = await res.json();
        if (res.success) {
            alert("true")
        } else {
            alert('false')
        }
    }
    return (
        <button style={{ margin: '0 2rem' }} onClick={() => handleDelete(id)}>Delete</button>
    )
}

export default Delete