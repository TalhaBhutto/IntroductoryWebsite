import Link from 'next/link'
import styles from '../../styles/Home.module.css'

const Footer = () => {
    return (
        <> <Link className={styles.btn} href="https://memoriesbytalha.netlify.app/"><a>My Demo Project</a></Link>  |
            <Link className={styles.btn} href="https://drive.google.com/file/d/14T4NUXkQAFN0KJ3Oau6DjbPnCQN7vEkx/view"><a>  My Complete CV</a></Link>

            <div>Copyright 2021 Talha Hussain</div>
        </>);
}

export default Footer;