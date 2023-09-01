import React from 'react'

const getUserDetails = async (id) => {
    let res = await fetch(`http://localhost:3000/api/user/${id}`);
    let data = await res.json();
    if (data.success) {
        return data.result;
    } else {
        return;
    }
}
const UserDetails = async ({ params }) => {
    let result = await getUserDetails(params.id);
    return (
        <div>
            <h2>userDetails page</h2>
            <ul>
                {
                    result &&
                    <li key={result.id}>
                        <p>{result.name} </p>
                        <p>{result.email}</p>
                    </li>

                }
            </ul>
        </div>
    )
}
export default UserDetails;