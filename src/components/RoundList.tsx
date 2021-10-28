import { Card, CardBody, CardContent, TextBox } from '@sberdevices/plasma-ui'
import React from 'react'
import styled from 'styled-components'
import { useStore } from '../hooks/useStore'

const PositionedCard = styled(Card)`
    max-width: max-content;
    margin-left: auto;
    margin-top: -2rem;
`

const ListContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: end;
    margin-top: -2rem;
    margin-bottom: 4rem;
    @media (max-width: 650px) {
        bottom: 9rem;
    }
`

const MarginTextBox = styled(TextBox)`
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
`

export const RoundList = React.memo(() => {
    const [state, _] = useStore()
    return (
        <>
            {
                !!state.points.length &&
                // <ListContainer>
                    <PositionedCard>
                        <CardBody style={{ height: '100%', alignItems: 'center' }}>
                            <CardContent style={{ height: '100%' }} cover={false}>
                                {
                                    state.points.map((point, i) => (
                                        <MarginTextBox>
                                            Круг {i + 1}: {point}
                                        </MarginTextBox>
                                    ))
                                }
                            </CardContent>
                        </CardBody>
                    </PositionedCard>
                // </ListContainer>
            }
        </>
    )
}
)

// export const ComponentMemo = React.memo(Component)
