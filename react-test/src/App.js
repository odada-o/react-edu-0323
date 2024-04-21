import Cat from './Cat'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import Home from './components/views/home/Home'
import News from './components/views/news/New'
import OrderCoffee, { DrinkCoffee } from './grammar/Asyn'
import Event from './grammar/Event'

// 축약형 표현 : return 문을 생략하고 괄호로 감싸기

function App() {
    const navArr = [{ title: 'Home' }, { title: 'About' }, { title: 'SignIn' }]

    return (
        <div className="wrap">
            <News />
        </div>
    )
}

export default App
