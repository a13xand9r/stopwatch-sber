import { createAssistant } from '@sberdevices/assistant-client'
import { Container } from '@sberdevices/plasma-ui'

import { useEffect, useRef } from 'react'
import { initAssistant } from './assistant/assistant'
import { AppHeader } from './components/AppHeader'
import { useStore } from './hooks/useStore'

function App() {
  const [state, dispatch] = useStore()
  const assistantRef = useRef<ReturnType<typeof createAssistant>>()
  useEffect(() => {
    assistantRef.current = initAssistant(dispatch)
  }, [])
  return (
    <Container>
      <AppHeader />
    </Container>
  )
}

export default App
