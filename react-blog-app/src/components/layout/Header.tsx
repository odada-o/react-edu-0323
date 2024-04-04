import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className="flex justify-between py-5 px-10">
            <h1 className="font-sans text-3xl font-bold">
                <Link to="/">blog</Link>
            </h1>
            <nav className="flex">
                <Link to="/post/new" className="px-2 py-2">
                    글쓰기
                </Link>
                <Link to="/profile" className="px-2 py-2">
                    프로필
                </Link>
                <Link to="/login" className="px-5 py-2 ml-2 rounded-full bg-gray-800 text-white">
                    로그인
                </Link>
            </nav>
        </header>
    )
}

export default Header
