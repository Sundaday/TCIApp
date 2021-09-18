import styles from '../styles/Home.module.css'
const Footer = () =>{
    return(
        <footer>
            <p className={styles.description}>Edit by{' '}
                <a href="https://www.linkedin.com/in/jonathankochdev/"
                target="_blank"
                rel="noopener noreferrer">
                    <code className={styles.code}>Sundaday</code>
                </a>
            </p>
        </footer>
    )
} 

export default Footer