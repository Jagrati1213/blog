import Link from 'next/link';
import React from 'react'
import style from './about.module.css'

function layout({ children }) {
    return (
        <div>
            NAVBAR

            <ul className={style.navbar_ul}>
                <li className={style.navbar_li}>
                    <Link href={'/about'} >About</Link>
                </li>
                <li className={style.navbar_li}>
                    <Link href={'/about/aboutstudent'}>AboutStudent</Link>
                </li>
                <li className={style.navbar_li}>
                    <Link href={'/login'}>Login</Link>
                </li>
            </ul>
            {children}
        </div>
    )
}

export default layout;