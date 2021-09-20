import Link from 'next/link'
import 'semantic-ui-css/semantic.min.css';
import styles from '../styles/Home.module.css'
import { signIn, signOut, useSession } from "next-auth/client"


const Navbar = () =>{
    const [session] = useSession();

    return (
        <nav>
            <div className="logo">
                <h1 className={styles.homeButton}>
                    <Link href='/'>
                        TCIapp
                    </Link>
                </h1> 
            </div>
            <div>

                {!session ? (
                    <button onClick={signIn}>Connexion</button>
                 ) : (
                    <>
                    <span>{session.user.name}</span>
                    {session.user.image && (
                        <img 
                            src ={session.user.image} 
                            style={{width: "50px", borderRadius:"50%"}}/>
                        )}
                    <button onClick={signOut}>Déconnexion</button>
                    </>
                    )} 
            </div>
        </nav>
    )
}

export default Navbar;