import { ActionsType, CharacterType, StateType } from '../types/types'
import { addZeroBefore } from '../utils/utils'


export const initialState = {
    character: 'sber' as CharacterType,
    ms: 0,
    s: 0,
    m: 0,
    h: 0,
    isGoing: false,
    points: [] as string[]
}

export const reducer = (state: StateType, action: ActionsType): StateType => {
    switch (action.type) {
        case 'SET_CHARACTER':
            return { ...state, character: action.characterId }
        case 'SET_H':
            return { ...state, h: action.payload }
        case 'SET_M':
            return { ...state, m: action.payload }
        case 'SET_MS':
            return { ...state, ms: action.payload }
        case 'SET_S':
            return { ...state, s: action.payload }
        case 'START_STOP_WATCH':
            return { ...state, isGoing: true }
        case 'STOP_STOP_WATCH':
            return { ...state, isGoing: false }
        case 'CLEAR_TIMER':
            return { ...state, ms: 0, s: 0, m: 0, h: 0, points: [] }
        case 'ADD_POINT':
            let points = [...state.points]
            if (points.length < 5) points.push(`${addZeroBefore(state.h)}:${addZeroBefore(state.m)}:${addZeroBefore(state.s)}:${addZeroBefore(state.ms)}`)
            return { ...state, points }
        default: return state
    }
}

export const actions = {
    setCharacter: (characterId: CharacterType) => ({ type: 'SET_CHARACTER', characterId } as const),
    setm: (payload: number) => ({ type: 'SET_M', payload } as const),
    setms: (payload: number) => ({ type: 'SET_MS', payload } as const),
    sets: (payload: number) => ({ type: 'SET_S', payload } as const),
    seth: (payload: number) => ({ type: 'SET_H', payload } as const),
    clearTimer: () => ({ type: 'CLEAR_TIMER' } as const),
    startStopWatch: () => ({ type: 'START_STOP_WATCH' } as const),
    stopStopWatch: () => ({ type: 'STOP_STOP_WATCH' } as const),
    addPoint: () => ({ type: 'ADD_POINT' } as const),
}