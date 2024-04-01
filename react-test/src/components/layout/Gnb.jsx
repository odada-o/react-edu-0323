import { Link } from 'react-router-dom'

const Gnb = () => {
    return (
        <nav id="gnb">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/signin">Sign In</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Gnb
