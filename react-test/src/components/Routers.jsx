import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from '../views/home/Home'
import About from '../views/about/About'
import Login from '../views/login/Login'

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Route>

                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routers
