import Link from 'next/link'

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
        </nav>
    )
}

export default Navbar;