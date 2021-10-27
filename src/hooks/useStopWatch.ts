import { useEffect, useRef } from 'react'
import { actions } from '../store/store'
import { useStore } from './useStore'


export const useStopWatch = () => {
    const [{ms, s, m, h, isGoing, points}, dispatch] = useStore()

    const interval = useRef<NodeJS.Timeout>()
    const msRef = useRef(0)
    const sRef = useRef(0)
    const mRef = useRef(0)
    const hRef = useRef(0)
    const isGoingRef = useRef(false)

    msRef.current = ms
    sRef.current = s
    mRef.current = m
    hRef.current = h
    isGoingRef.current = isGoing

    useEffect(() => {
        interval.current && clearInterval(interval.current)
        if (isGoing){
            interval.current = setInterval(() => {
                if (isGoingRef.current) {
                    if (msRef.current < 99) {
                        dispatch(actions.setms(msRef.current + 1))
                    } else {
                        dispatch(actions.setms(0))
                        if (sRef.current < 59) {
                            dispatch(actions.sets(sRef.current + 1))
                        } else {
                            dispatch(actions.sets(0))
                            if (mRef.current < 59) {
                                dispatch(actions.setm(mRef.current + 1))
                            } else {
                                dispatch(actions.setm(0))
                                dispatch(actions.seth(hRef.current + 1))
                            }
                        }
                    }
                }
            }, 10)
        }
    }, [isGoing])

    const startStopWatch = () => {
        dispatch(actions.startStopWatch())
    }
    const pauseStopWatch = () => {
        dispatch(actions.stopStopWatch())
    }
    const resetStopWatch = () => {
        dispatch(actions.stopStopWatch())
        dispatch(actions.clearTimer())
    }
    const addRound = () => {
        dispatch(actions.addPoint())
    }

    return {
        ms,
        s,
        m,
        h,
        startStopWatch,
        pauseStopWatch,
        resetStopWatch,
        isGoing,
        addRound,
        roundsNumber: points.length
    }
}