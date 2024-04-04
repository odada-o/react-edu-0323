import Profile from '../../components/layout/Profile'
import PostList from '../post/index'

const Home = () => {
    return (
        <div className="flex gap-10">
            <div className="w-3/4">
                <PostList />
            </div>
            <div className="w-1/4">
                <Profile />
            </div>
        </div>
    )
}

export default Home
