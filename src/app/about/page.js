import Delete from '@/component/Delete';
import Link from 'next/link';
import React from 'react'

const getUserDetails = async () => {
    let res = await fetch('http://localhost:3000/api/user');
    let data = await res.json();
    if (data.success) {
        return data.result;
    } else {
        return;
    }
}
const About = async () => {
    let result = await getUserDetails();
    return (
        <div>
            <h2>userDetails page</h2>
            <ol>
                {
                    result.map(item => {
                        return <li key={item.id}>
                            <p>{item.name} </p>
                            <p>{item.email}</p>
                            <Link href={`about/${item.id}/updateuser`}> Edit</Link>
                            <Delete id={item.id} />
                        </li>
                    })
                }
            </ol>

            <Link href={'/adduser'}> Add new user</Link>
        </div>
    )
}
export default About;