import Link from 'next/link'
import Image from 'next/image'
import { signin, signIn, signOut, useSession } from "next-auth/client"

const Navbar = () =>{
    const [session, loading] = useSession();
    return (
        <nav>
            <h1 className="homeButton">
                <Link href='/'>
                    TCIapp
                </Link>
            </h1>      
            <div className="banner">
                <Image 
                src="/logotci.png" 
                width={200} 
                height={200}
                />
            </div>   
            {!session?(
                <button onClick={signin}>Connexion</button>
                ) : (
                <button onClick={signOut}>Deconnexion</button>
            )}
        </nav>
    )
}

export default Navbar;