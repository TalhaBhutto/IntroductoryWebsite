import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
            <title>Talha Hussain | Home</title>
            <meta name="Talha Hussain Bhutto" content="Introductory Website" />
        </Head>
    <div>
      <h1  className={styles.title}>Introduction</h1>
      <p  className={styles.text}>Hello My name is Talha Hussain Bhutto. I am an undergraduate software engineer. I have been working on website development since 2020. I have sound experience of HTML, CSS, ES6 , React, Redux and Next. I have also worked on ReactNative, Node JS, MongoDB, Bootstrap, Material UI and antDesign.</p>
      </div>
      </>
  )
}
