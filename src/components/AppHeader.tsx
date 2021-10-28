import { Header } from '@sberdevices/plasma-ui'
import styled from 'styled-components'

const StyledHeader = styled(Header)`
    @media (min-width: 650px) {
        padding: 1rem;
    }
`

export const AppHeader = () => {
    const closeApp = () => {
        window.history.back()
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