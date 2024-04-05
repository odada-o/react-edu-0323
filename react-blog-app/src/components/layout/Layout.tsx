import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import Profile from './Profile'

function Layout() {
    return (
        <div className="wrap">
            <Header />
            <main id="main" className="flex gap-10  max-w-5xl mx-auto">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export function LayoutNone() {
    return (
        <div className="wrap">
            <main id="main" className="flex gap-10  max-w-5xl mx-auto">
                <Outlet />
            </main>
        </div>
    )
}

export default Layout
