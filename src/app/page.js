'use client' //client side rendering
import { useState } from 'react';
import styles from './page.module.css'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
export default function Home() {

  const router = useRouter();
  // function with parameter
  // const apple = (name) => {
  //   alert("fruit " + name);
  // }
  // state to change data -->re render data
  // const [name, setName] = useState('jagrati');

  // Inner Component 
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (file) {
      const formData = new FormData();
      formData.set('file', file);
      try {
        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          console.log('File uploaded successfully');
        } else {
          console.error('File upload failed');
        }
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  }

  // const InnerComp = () => {
  //   return <h1>hii</h1>
  // }

  return (
    <main className={styles.main}>
      <Link href={'/about'}>About</Link>
      <form onSubmit={handleSubmit}>
        <input type='file' name='file' onChange={(e) => setFile(e.target.files[0])} />
        <button type='submit'>upload</button>
      </form>
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