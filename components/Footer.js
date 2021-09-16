import styles from '../styles/Home.module.css'
const Footer = () =>{
    return(
        <footer>
            <a href="https://www.linkedin.com/in/jonathankochdev/"
                target="_blank"
                rel="noopener noreferrer">
                <p className={styles.description}>Edit by{' '}
                    <code className={styles.code}>Sundaday</code>
                </p>
            </a>
        </footer>
    )
} 

export default Footer