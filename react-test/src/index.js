import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'

// React.StrictMode는 개발 모드에서만 활성화되며, 애플리케이션 내부의 잠재적 문제를 식별하기 위해 부수 효과를 포함한 일부 생명주기 메서드를 두 번씩 호출합니다.
// 이는 앱의 로그인, 상태 업데이트, 재렌더링 등을 검사하여 안전하지 않은 생명주기 사용, 레거시 API의 사용, 예측할 수 없는 부수 효과 등을 찾아내기 위함입니다.

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
