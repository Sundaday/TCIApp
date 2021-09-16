import Image from 'next/image'
import styles from '../styles/Home.module.css'


const Footer = () =>{
    return(
        <a href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer">Powered by {' '}
            <span className={styles.logo}>
                <Image
                    src="/logotci.png"
                    alt="Vercel Logo"
                    width={70}
                    height={70}
                />
            </span >
        </a>

    )
} 

export default Footer