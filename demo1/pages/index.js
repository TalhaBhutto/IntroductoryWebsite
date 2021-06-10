import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar/navbar';

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <h1>Home Page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, nulla at error aliquam assumenda, alias iste harum delectus optio iure qui illo debitis. Error, numquam ipsum reprehenderit modi sint iure suscipit doloremque architecto. Magni dolor, eaque eius mollitia ipsum libero illum, maiores ipsam quas maxime dolore excepturi iure quam soluta ea pariatur nihil placeat temporibus velit cumque, laboriosam incidunt ipsa officiis. Aliquam voluptatum ea totam ratione doloribus, at dolore voluptate? Optio harum nemo non ut consequuntur, nisi facilis officiis a eligendi, molestiae facere deleniti corporis ullam odio, inventore laudantium sapiente esse ab recusandae hic aliquam omnis aperiam adipisci. Nostrum, expedita.</p>
    </div>
  )
}
