// import { createAssistant } from '@sberdevices/assistant-client'
import { Button, Container, Headline1 } from '@sberdevices/plasma-ui'

import { useEffect, useRef, useState } from 'react'
import { initAssistant } from './assistant/assistant'
import { AppHeader } from './components/AppHeader'
import { StopWatch } from './components/StopWatch'
import { useStore } from './hooks/useStore'

function App() {
    const [state, dispatch] = useStore()
    // const assistantRef = useRef<ReturnType<typeof createAssistant>>()

    // useEffect(() => {
    //     assistantRef.current = initAssistant(dispatch)
    // }, [])
    return (
        <Container>
            <AppHeader />
            <StopWatch />
        </Container>
    )
}

export default App
