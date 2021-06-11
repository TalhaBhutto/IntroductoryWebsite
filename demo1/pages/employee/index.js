import styles from '../../styles/employee.module.css'
import Link from 'next/link'
import Head from 'next/head'


export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { employee: data }
  }
}

const employee = ({ employee }) => {
  console.log(employee)

  return (
    <>
    <Head>
            <title>Talha Hussain | API Call</title>
            <meta name="Talha Hussain Bhutto" content="Introductory Website" />
        </Head>
    <div>
      <h1>All employee</h1>
      <p>Just a random call of APIs from JSON placeholder.</p>
      {employee.map(employee => (
        <Link href={'/employee/' + employee.id} key={employee.id}>
          <a className={styles.single}>
            <h3>{ employee.name }</h3>
          </a>
        </Link>
      ))}
    </div></>
  );
}
 
export default employee;