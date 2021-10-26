import { useEffect, useRef, useState } from 'react'


export const useStopWatch = () => {
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
    const resetStopWatch = () => {
        setIsGoing(false)
        setms(0)
        sets(0)
        setm(0)
        seth(0)
    }

    return {
        ms,
        s,
        m,
        h,
        startStopWatch,
        pauseStopWatch,
        resetStopWatch,
        isGoing
    }
}