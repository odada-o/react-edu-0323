import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

const Layout = () => {
    return (
        <div>
            <Header />
            <main id="main">
                {/* {props.showTitle && <h2>{props.title}</h2>}
                {props.children} */}
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export const LayoutNone = () => {
    return (
        <div>
            <main id="main">
                <Outlet />
            </main>
        </div>
    )
}

export default Layout
