import Navbar from '../components/navbar'
import Footer from '../components/footer'


const Layout = ({children}) =>{
    return(
        <div className="content">
            <Navbar/>
                {children}
            <Footer/>
        </div>
    )
}

export default Layout;