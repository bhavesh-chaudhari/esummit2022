import Navbar from "../navbar/Navbar"
import Footer from "../footer/Footer"

const Layout = ({children}) => {
    return (
        <div>
            <div className="content">
                <Navbar></Navbar>
                {children}
                {/* <Footer></Footer> */}
            </div>
        </div>
    )
}

export default Layout
