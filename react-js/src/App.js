import Cat from './Cat'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import Home from './components/views/home/Home'
import Event from './grammar/Event'

// 축약형 표현 : return 문을 생략하고 괄호로 감싸기

function App() {
    const navArr = [{ title: 'Home' }, { title: 'About' }, { title: 'SignIn' }]

    return (
        <div className="wrap">
            <Event />
            <Header title="dashboard" nav={navArr} />
            <Home title="home" desc="홈 화면" />
            <Home title="about" desc="소개 화면" />
            <Home title="signin" desc="로그인 화면" />
            <Footer />
        </div>
    )
}

export default App
