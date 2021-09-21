import Link from 'next/link'
import Image from 'next/image'
import button from 'semantic-ui-css/semantic.min.css';
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
            <Image
                src="/logotci.png"
                alt="Vercel Logo"
                width={170}
                height={170}
            />
            <div className={styles.logButton}>
                {!session ? (
                    <button class="ui primary button" onClick={() => signIn("discord")}>Connexion Discord</button>
                ) : (
                    <>
                    <span>{session.user.name}</span>
                    {session.user.image && (
                        <img 
                            src ={session.user.image} 
                            style={{width: "50px", borderRadius:"50%"}}/>
                        )}
                            <button class="ui primary button" onClick={signOut}>Déconnexion</button>
                    </>
                )} 
            </div>
        </nav>
    )
}

export default Navbar;