import { Header } from '@sberdevices/plasma-ui'
import styled from 'styled-components'
import { useAssistant } from '../hooks/useAssistant'

const StyledHeader = styled(Header)`
    @media (min-width: 650px) {
        padding: 1rem;
    }
`

export const AppHeader = () => {
    const assistant = useAssistant()
    const closeApp = () => {
        assistant.close()
    }
    return (
        <StyledHeader
            minimize={true}
            onMinimizeClick={closeApp}
            back={false}
            title={'Мой секундомер'}
        />
    )
}