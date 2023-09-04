import Delete from '@/component/Delete';
import { Host } from '@/feature/main';
import Link from 'next/link';
import React from 'react'

const getUserDetails = async (hostName) => {
    try {
        let res = await fetch(`http://${hostName}/api/products`);
        let data = await res.json();
        if (data.success) {
            return data.result;
        } else {
            return;
        }
    } catch (error) {
        console.log(error);
    }
}
const About = async () => {
    const hostName = Host();
    let result = await getUserDetails(hostName);

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
                                <td> <Delete id={item._id} hostname={hostName} /></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>

            <Link href={'/adduser'}>
                <button style={{ margin: '7rem 2rem' }} >Add user</button>
            </Link>
        </div>
    )
}
export default About;