import Link from 'next/link'
import Image from 'next/image'
import { Container, Form, Header } from "semantic-ui-react"
import 'semantic-ui-css/semantic.min.css';
import { signIn, signOut, useSession } from "next-auth/client"

const Navbar = () =>{
    const [session, loading] = useSession();
    return (
        <nav>
            <Container>
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
                <button onClick={() => signIn("discord")}>Connexion</button>
                ) : (
                <>
                <span>{session.user.name}</span>
                    {session.user.image && <img src={session.user.image} style={{ width:'50px', borderRadius:'100%'}}/>}
                <button onClick={signOut}>Deconnexion</button>
                </>    
            )}
            </Container>
        </nav>
    )
}

export default Navbar;