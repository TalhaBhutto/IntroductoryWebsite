import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import { useState,useEffect } from 'react';

const Footer = () => {
    const [color1, setColor1] = useState("black");
    const [color2, setColor2] = useState("blue");
    return (
        <> <Link href="https://memoriesbytalha.netlify.app/"><a className={styles.btn2}>My Demo Project</a></Link>  ||
            <Link href="https://drive.google.com/file/d/14T4NUXkQAFN0KJ3Oau6DjbPnCQN7vEkx/view"><a  className={styles.btn3}>  My Complete CV</a></Link>

            <div>Copyright 2021 Talha Hussain</div>
        </>);
}

export default Footer;