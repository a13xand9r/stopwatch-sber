import { Body1, Button } from '@sberdevices/plasma-ui'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const FlexContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 70%;
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

export const StopWatch = React.memo(() => {

    const [isGoing, setIsGoing] = useState(false)

    const [ms, setms] = useState(0)
    const [s, sets] = useState(0)
    const [m, setm] = useState(0)
    const [h, seth] = useState(0)

    const interval = useRef<NodeJS.Timeout>()
    const msRef = useRef(0)
    const sRef = useRef(0)
    const mRef = useRef(0)
    const hRef = useRef(0)

    msRef.current = ms
    sRef.current = s
    mRef.current = m
    hRef.current = h

    useEffect(() => {
        interval.current && clearInterval(interval.current)
        if (isGoing){
            interval.current = setInterval(() => {
                if (msRef.current < 99) {
                    setms(prev => prev + 1)
                } else {
                    setms(0)
                    sets(prev => prev + 1)
                }
            }, 10)
        }
    }, [isGoing])

    const startStopWatch = () => {
        setIsGoing(true)
    }
    const pauseStopWatch = () => {
        setIsGoing(false)
    }
    const stopStopWatch = () => {
        setIsGoing(false)
        setms(0)
        sets(0)
        setm(0)
        seth(0)
    }

    return (
        <>
            <Body1 style={{fontSize: '2.2rem'}} >
                <FlexContainer>
                    <TimeContainer>{h}</TimeContainer>
                    <TimeContainer>{m}</TimeContainer>
                    <TimeContainer>{s > 10 ? '' : '0'}{s}</TimeContainer>
                    <TimeContainer>{ms > 10 ? '' : '0'}{ms}</TimeContainer>
                </FlexContainer>
            </Body1>
            {
                isGoing ?
                <FlexContainer>
                    {/* <Button text='Старт' onClick={startStopWatch} /> */}
                    <Button view='secondary' text='Пауза' onClick={pauseStopWatch} />
                    <Button view='warning' text='Стоп' onClick={stopStopWatch} />
                </FlexContainer> :
                <Button view='success' text='Старт' onClick={startStopWatch} />
            }
            
        </>
    )
}
)

// export const ComponentMemo = React.memo(Component)
