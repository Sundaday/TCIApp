import Link from 'next/link'
import Image from 'next/image'
import 'semantic-ui-css/semantic.min.css';
import { signIn, signOut, useSession } from "next-auth/client"

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
            <div className="LogButton">
                {!session?(
                    <button className="bLogSignIn" class="ui  primary button" onClick={() => signIn("discord")}>Connexion</button>
                        ) : (
                    <span>
                        <span className="ppLog" >{session.user.name}</span>
                        {session.user.image && <img src={session.user.image} style={{ width:'50px', borderRadius:'100%'}}/>}
                        <button className="bLogSignOut" class="ui button" onClick={signOut}>Deconnexion</button>
                    </span>    
                )}
            </div>
        </nav>
    )
}

export default Navbar;