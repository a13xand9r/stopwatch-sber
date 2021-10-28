import { Body1, Button } from '@sberdevices/plasma-ui'
import React from 'react'
import styled from 'styled-components'
import { useStopWatch } from '../hooks/useStopWatch'
import { addZeroBefore } from '../utils/utils'

const FlexContainer = styled.div`
    display: flex;
    justify-content: space-around;
    /* width: 35rem; */
    margin: auto;
    margin-bottom: 3rem;
`

const TimeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #006eff2d;
    border-radius: 0.8rem;
    width: 4rem;
    height: 5rem;
`

const StopWatchContainer = styled.div`
    width: 31rem;
    margin: 0 auto;
    margin-top: 1rem;
    text-align: center;
    @media (max-width: 650px) {
        width: 325px;
        margin: 0 auto;
        margin-top: 4rem;
    }
`

const StyledButton = styled(Button)`
    width: 9rem;
    @media (max-width: 650px) {
        width: 6.4rem;
    }
`

export const StopWatch = React.memo(() => {

    const { h, m, isGoing, ms, s, pauseStopWatch, startStopWatch, resetStopWatch, addRound, roundsNumber } = useStopWatch()
    const isAnyTime = Boolean(ms || s || m || h)

    return (
        <StopWatchContainer>
            <Body1 style={{ fontSize: '2.2rem' }} >
                <FlexContainer>
                    <TimeContainer>{addZeroBefore(h)}</TimeContainer>
                    <TimeContainer>{addZeroBefore(m)}</TimeContainer>
                    <TimeContainer>{addZeroBefore(s)}</TimeContainer>
                    <TimeContainer>{addZeroBefore(ms)}</TimeContainer>
                </FlexContainer>
            </Body1>
            {
                <FlexContainer>
                    {!isGoing && <StyledButton view='accent' text='Старт' onClick={startStopWatch} />}
                    {isGoing && <StyledButton view='secondary' text='Пауза' onClick={pauseStopWatch} />}
                    {isAnyTime && <StyledButton view='secondary' text='Круг' onClick={addRound} disabled={roundsNumber >= 5} />}
                    {isAnyTime && <StyledButton view='critical' text='Стоп' onClick={resetStopWatch} />}
                </FlexContainer>
            }
        </StopWatchContainer>
    )
}
)
