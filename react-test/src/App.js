import Cat from './Cat'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import Home from './components/views/home/Home'
import OrderCoffee, { DrinkCoffee } from './grammar/Asyn'
import Event from './grammar/Event'

// 축약형 표현 : return 문을 생략하고 괄호로 감싸기

function App() {
    const navArr = [{ title: 'Home' }, { title: 'About' }, { title: 'SignIn' }]

    return (
        <div className="wrap">
            <OrderCoffee coffee="아메리카노" time={3000} />
        </div>
    )
}

export default App
