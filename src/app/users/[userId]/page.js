import Link from 'next/link';
import React from 'react'

async function getUserDetails(id) {
    let data = await fetch(`http://localhost:3000/api/users/${id}`);
    data = data.json();
    return data;
}
async function UserDetails({ params }) {
    let data = await getUserDetails(params.userId)
    console.log(data);
    return (
        <div>User Details
            {data !== 'Not found' &&
                <li>{data.name} = {data.email}</li>

            }
        </div>
    )
}

export default UserDetails;