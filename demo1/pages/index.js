import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
    <title>Ninja List | Home</title>
    <meta name="keywords" content="ninjas"/>
    </Head>
    <div>
      <h1  className={styles.title}>Home Page</h1>
      <p  className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, nulla at error aliquam assumenda, alias iste harum delectus optio iure qui illo debitis. Error, numquam ipsum reprehenderit modi sint iure suscipit doloremque architecto. Magni dolor, eaque eius mollitia ipsum libero illum, maiores ipsam quas maxime dolore excepturi iure quam soluta ea pariatur nihil placeat temporibus velit cumque, laboriosam incidunt ipsa officiis. Aliquam voluptatum ea totam ratione doloribus, at dolore voluptate? Optio harum nemo non ut consequuntur, nisi facilis officiis a eligendi, molestiae facere deleniti corporis ullam odio, inventore laudantium sapiente esse ab recusandae hic aliquam omnis aperiam adipisci. Nostrum, expedita.</p>
      <Link  className={styles.btn} href="/ninja"><a>See Ninja Listing</a></Link>
      </div>
      </>
  )
}
