import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout, { LayoutNone } from './components/layout/Layout'
import Home from './views/Home'
import Signin from './views/Signin'
import About from './views/About'

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Route>

                <Route element={<LayoutNone />}>
                    <Route path="/signin" element={<Signin />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routers
