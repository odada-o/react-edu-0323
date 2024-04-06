import Grammar from './grammar'
import State from './grammar/State'

import Routers from './components/Routers'

// styled-components
import GlobalStyle from './theme/globalStyles'
import { ThemeProvider } from 'styled-components'
import { Reset } from 'styled-reset'
import theme from './theme/theme'

// tailwind css
import './style/style.css'

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Reset />
                <GlobalStyle />
                <Routers />

                <State />
            </ThemeProvider>
        </>
    )
}

export default App
