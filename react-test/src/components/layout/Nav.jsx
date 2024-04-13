const Nav = ({ nav }) => {
    // const { nav } = props

    return (
        <nav>
            <ul>
                {nav.map((item, index) => (
                    // item = { title: 'Home' }
                    <li key={index}>
                        <a href="#">{item.title}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Nav
