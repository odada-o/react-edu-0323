import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import ProfilePage from '../pages/profile'
import LoginPage from '../pages/login/login'
import SignupPage from '../pages/signup'
import Layout from './layout/Layout'
import PostList from '../pages/post'
import PostDetail from '../pages/post/detail'
import PostEdit from '../pages/post/edit'
import PostNew from '../pages/post/new'

function Routers() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/post" element={<PostList />} />
                        <Route path="/post/new" element={<PostNew />} />
                        <Route path="/post/:id" element={<PostDetail />} />
                        <Route path="/post/edit/:id" element={<PostEdit />} />
                        <Route path="/profile" element={<ProfilePage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/signup" element={<SignupPage />} />
                        {/* <Route path="*" element={<NotFound />} /> */}
                        <Route path="*" element={<Navigate replace to="/" />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Routers
