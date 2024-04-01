// 글로벌 스타일 적용
import GlobalStyle from './theme/globalStyles'
// 테마 적용
import { ThemeProvider } from 'styled-components'
import theme from './theme/theme'
// tailwind css
import './style/style.css'

import Grammar from './grammar'
import Routers from './Routers'

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Routers />

                <Grammar />
            </ThemeProvider>
        </>
    )
}

export default App
