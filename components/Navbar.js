import Link from 'next/link'
import Image from 'next/image'


const Navbar = () =>{
    return (
        <nav>
            <div className="logo">
                <h1>
                    <Link href='/'>
                        
                        TCIapp
                    </Link>
                </h1>
            </div>         
            <div className="banner">
                <Image src="/logotci.png" width={200} height={200}/>
            </div>   
        </nav>
    )
}

export default Navbar;