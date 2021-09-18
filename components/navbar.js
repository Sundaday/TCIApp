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
        </nav>
    )
}

export default Navbar;