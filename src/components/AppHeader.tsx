import { Header } from '@sberdevices/plasma-ui'
import styled from 'styled-components'

const StyledHeader = styled(Header)`
    @media (min-width: 650px) {
        padding: 1rem;
    }
`

export const AppHeader = () => {
    return (
        <StyledHeader
            back={false}
            title={'Мой секундомер'}
        />
    )
}