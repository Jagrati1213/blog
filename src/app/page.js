'use client' //client side rendering
import { useState } from 'react';
import styles from './page.module.css'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
// import Product from './productlist/page';
export default function Home() {

  // const router = useRouter();
  // function with parameter
  // const apple = (name) => {
  //   alert("fruit " + name);
  // }
  // state to change data -->re render data
  // const [name, setName] = useState('jagrati');

  // Inner Component 
  // const InnerComp = () => {
  //   return <h1>hii</h1>
  // }

  return (
    <main className={styles.main}>
      <h2>Hello</h2>
      {/* <User name="Jagrati" /> */}
      {/* <h1>Event, function & state</h1> */}
      {/* <p>{name}</p> */}
      {/* <button onClick={() => setName('Siddhu')}>change</button> */}
      {/* if we directly called function it used server side rendering */}
      {/* <button onClick={() => apple('jagrati')}>click</button> */}

      {/* <InnerComp /> */}
      {/* {
        InnerComp() //used as function component
      } */}

      {/* <Link href='/login'>
        go to login page
      </Link> */}

      {/* <button onClick={() => router.push('/login')}>go</button> */}

    </main>
  )
}

// component
const User = ({ name = 'xyz' }) => {
  return (
    <p>user name is {name}</p>
  )
}