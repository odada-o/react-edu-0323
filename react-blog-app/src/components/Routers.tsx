import { useState } from 'react'

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import ProfilePage from '../pages/profile/Profile'
import Layout from './layout/Layout'
import PostDetail from '../pages/post/PostDetail'
import PostEdit from '../pages/post/PostEdit'
import Login from '../pages/login/Login'
import Signup from '../pages/signup/Signup'
import PostNew from '../pages/post/PostNew'

function Routers() {
    // firebase auth가 필요한 페이지에서 사용
    const [isAuth, setIsAuth] = useState<boolean>(false)
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {isAuth ? (
                        <>
                            <Route path="/" element={<Layout />}>
                                <Route path="/new" element={<PostNew />} />
                                <Route path="/post/edit/:id" element={<PostEdit />} />
                                {/* <Route path="*" element={<NotFound />} /> */}
                            </Route>
                        </>
                    ) : (
                        <>
                            <Route path="/" element={<Layout />}>
                                <Route path="/" element={<Home />} />
                                <Route path="/post/:id" element={<PostDetail />} />
                                <Route path="/profile" element={<ProfilePage />} />
                            </Route>
                            <Route path="/login" element={<Login />} />
                            <Route path="/signup" element={<Signup />} />
                            <Route path="*" element={<Navigate replace to="/" />} />
                        </>
                    )}
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Routers
