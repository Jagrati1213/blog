import Delete from '@/component/Delete';
import { baseURL } from '@/utils/dbconnection';
import Link from 'next/link';
import React from 'react'

const getUserDetails = async () => {

    console.log("url :", baseURL);
    console.log(process.env.NODE_ENV);
    let res = await fetch(`${baseURL}/api/products`);
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
            <table border={1}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Company</td>
                        <td>Price</td>
                        <td>Colors</td>
                        <td>Category</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        result.map(item => {
                            return <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.company}</td>
                                <td>{item.price}</td>
                                <td>{item.color}</td>
                                <td>{item.category}</td>
                                <td><Link href={`about/${item._id}`}>Update</Link></td>
                                <td> <Delete id={item._id} /></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>

            <Link href={'/adduser'}> Add new user</Link>
        </div>
    )
}
export default About;