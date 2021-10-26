import { ActionsType, CharacterType, StateType } from '../types/types'


export const initialState = {
    character: 'sber' as CharacterType,
    ms: 0,
    s: 0,
    m: 0,
    h: 0,
    isGoing: false,
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
        case 'SET_IS_GOING':
            return { ...state, isGoing: action.payload }
        case 'CLEAR_TIMER':
            return { ...state, ms: 0, s: 0, m: 0, h: 0 }
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
    setIsGoing: (payload: boolean) => ({ type: 'SET_IS_GOING', payload } as const),
}