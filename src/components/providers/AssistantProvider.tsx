import { createAssistant } from '@sberdevices/assistant-client'
import { ReactNode, useEffect, useRef } from 'react'
import { initAssistant } from '../../assistant/assistant'
import { AssistantContext } from '../../context/assistantContext'
import { useStore } from '../../hooks/useStore'

export const AssistantProvider = ({ children }: { children: ReactNode }) => {
    const [_, dispatch] = useStore()
    const assistantRef = useRef<ReturnType<typeof createAssistant>>()
    useEffect(() => {
        console.log('useEffect')
        assistantRef.current = initAssistant(dispatch)
    }, [])
    return (
        <AssistantContext.Provider value={assistantRef.current as ReturnType<typeof createAssistant>}>
            {children}
        </AssistantContext.Provider>
    )
}
