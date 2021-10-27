import { Card, CardBody, CardContent, TextBox } from '@sberdevices/plasma-ui'
import React from 'react'
import styled from 'styled-components'
import { useStore } from '../hooks/useStore'

const PositionedCard = styled(Card)`
    position: absolute;
    bottom: 6.5rem;
    right: 2rem;
`

const MarginTextBox = styled(TextBox)`
    margin-bottom: 1rem;
`

export const RoundList = React.memo(() => {
    const [state, _] = useStore()
    console.log('Component2 render')
    return (
        <>
            {
                !!state.points.length &&
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
            }
        </>
    )
}
)

// export const ComponentMemo = React.memo(Component)
