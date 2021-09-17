import Link from 'next/link'
import Image from 'next/image'
import 'semantic-ui-css/semantic.min.css';


const Navbar = () =>{

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
        </nav>
    )
}

export default Navbar;