import Delete from '@/component/Dele/Delete';
import Link from 'next/link';
import React from 'react'

async function getUserData() {
    let data = await fetch('http://localhost:3000/api/users');
    data = await data.json();
    return data;
}

async function Users() {

    let data = await getUserData();
    return (
        <div>Users :
            {
                data.map((item) => {
                    return <><li>
                        <Link
                            style={{ textDecoration: 'none' }}
                            href={`users/${item.id}`}
                        >{item.name} </Link>
                        :
                        <Link href={`users/${item.id}/updateuser`} style={{ margin: '0 2rem' }}> edit
                        </Link>
                        <Delete id={item.id} />
                    </li>
                    </>

                })
            }
        </div>
    )
}

export default Users