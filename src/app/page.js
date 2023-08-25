import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <User name="Jagrati" />
    </main>
  )
}

const User = ({ name = 'xyz' }) => {
  return (
    <p>user name is {name}</p>
  )
}