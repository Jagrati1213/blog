'use client' //client side rendering
import styles from './page.module.css'
export default function Home() {

  // function with parameter
  const apple = (name) => {
    alert("fruit " + name);
  }

  return (
    <main className={styles.main}>
      {/* <User name="Jagrati" /> */}
      <h1>Event, function & state</h1>
      {/* if we directly called function it used server side rendering */}
      {/* <button onClick={() => apple('jagrati')}>click</button> */}
    </main>
  )
}

// component
const User = ({ name = 'xyz' }) => {
  return (
    <p>user name is {name}</p>
  )
}