"use client";
import React from 'react'

function Delete({ id, hostname }) {
    const handleDelete = async () => {
        let res = await fetch(`${hostname}/api/products/${id}`, {
            method: 'DELETE'
        });
        res = await res.json();
        if (res.success) {
            alert('deleted')
        } else {
            alert("there is some issue...");
        }
    }
    return (
        <button style={{ margin: '0 2rem' }} onClick={() => handleDelete(id)}>Delete</button>
    )
}

export default Delete