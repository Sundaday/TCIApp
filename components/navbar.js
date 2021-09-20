import Link from 'next/link'
import 'semantic-ui-css/semantic.min.css';
import styles from '../styles/Home.module.css'


const Navbar = () =>{

    return (
        <nav>
            <div className="logo">
                <h1 className={styles.homeButton}>
                    <Link href='/'>
                        TCIapp
                    </Link>
                </h1> 
            </div>
        </nav>
    )
}

export default Navbar;