import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

const Layout = () => {
    return (
        <div>
            <Header />
            <main id="main" style={{ height: '200vh' }}>
                {/* {props.showTitle && <h2>{props.title}</h2>}
                {props.children} */}
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout
