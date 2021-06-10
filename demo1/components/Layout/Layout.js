import Footer from "../footer/footer"
import Navbar from "../navbar/navbar"

const Layout = ({children}) => {
    return ( 
        <div>
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
        </div>
     );
}
 
export default Layout;