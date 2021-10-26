import { useEffect, useRef, useState } from 'react'
import { actions } from '../store/store'
import { useStore } from './useStore'


export const useStopWatch = () => {
    // const [isGoing, setIsGoing] = useState(false)

    // const [ms, setms] = useState(0)
    // const [s, sets] = useState(0)
    // const [m, setm] = useState(0)
    // const [h, seth] = useState(0)

    const [{ms, s, m, h, isGoing}, dispatch] = useStore()

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
                    dispatch(actions.setms(msRef.current + 1))
                } else {
                    dispatch(actions.setms(0))
                    dispatch(actions.sets(sRef.current + 1))
                }
            }, 10)
        }
    }, [isGoing])

    const startStopWatch = () => {
        dispatch(actions.setIsGoing(true))
    }
    const pauseStopWatch = () => {
        dispatch(actions.setIsGoing(false))
    }
    const resetStopWatch = () => {
        dispatch(actions.setIsGoing(false))
        dispatch(actions.clearTimer())
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