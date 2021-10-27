import { Body1, Button } from '@sberdevices/plasma-ui'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useAssistant } from '../hooks/useAssistant'
import { useStopWatch } from '../hooks/useStopWatch'

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
    background-color: #006eff4b;
    border-radius: 0.8rem;
    width: 4rem;
    height: 5rem;
`

const StopWatchContainer = styled.div`
    width: 500px;
    margin: 5rem auto;
    text-align: center;
    @media (max-width: 650px) {
        width: 300px;
    }
`

const StyledButton = styled(Button)`
    width: 10rem;
    @media (max-width: 650px) {
        width: 8rem;
    }
`

export const StopWatch = React.memo(() => {

    const {h, m, isGoing, ms, s, pauseStopWatch, startStopWatch, resetStopWatch} = useStopWatch()
    const isAnyTime = Boolean(ms || s || m || h)

    return (
        <StopWatchContainer>
            <Body1 style={{fontSize: '2.2rem'}} >
                <FlexContainer>
                    <TimeContainer>{h > 9 ? '' : '0'}{h}</TimeContainer>
                    <TimeContainer>{m > 9 ? '' : '0'}{m}</TimeContainer>
                    <TimeContainer>{s > 9 ? '' : '0'}{s}</TimeContainer>
                    <TimeContainer>{ms > 9 ? '' : '0'}{ms}</TimeContainer>
                </FlexContainer>
            </Body1>
            {
                <FlexContainer>
                    {!isGoing && <StyledButton view='success' text='Старт' onClick={startStopWatch} />}
                    {isGoing && <StyledButton view='secondary' text='Пауза' onClick={pauseStopWatch} />}
                    {isAnyTime && <StyledButton view='critical' text='Стоп' onClick={resetStopWatch} />}
                </FlexContainer>
            }
        </StopWatchContainer>
    )
}
)

// export const ComponentMemo = React.memo(Component)
