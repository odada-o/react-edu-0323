import Comments from '../../comments/Comments'

const Home = ({ title, desc }) => {
    return (
        <main>
            <h2>{title}</h2>
            <p>{desc}</p>
            <Comments />
        </main>
    )
}

export default Home
