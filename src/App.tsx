import { Container } from '@sberdevices/plasma-ui'
import { AppHeader } from './components/AppHeader'
import { RoundList } from './components/RoundList'
import { StopWatch } from './components/StopWatch'

function App() {
    return (
        <Container>
            <AppHeader />
            <StopWatch />
            <RoundList />
        </Container>
    )
}

export default App

