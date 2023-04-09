// IMPORTS
import { ReactNode, createContext, useReducer } from 'react'

// TYPES
type Action = {
    type: string,
    payload: string | number | null
}

// INITIAL STATE
const initialState = {
    step: 0,
    username: null,
    platform: 'Android',
    quantity: 500,
    setUsername: (username: string) => {},
    setPlatform: (platform: 'Android' | 'iPhone' | 'PC' | 'Xbox') => {},
    setQuantity: (quantity: 500 | 800 | 1200 | 2000) => {},
    nextStep: () => {},
}

// CONTEXT
const UserContext = createContext(initialState)

// REDUCER
const reducer = (state: any, action: Action) => {
    switch (action.type) {
    case 'SET_USERNAME': return {
        ...state,
        username: action.payload,
    }

    case 'SET_PLATFORM': return {
        ...state,
        platform: action.payload,
    }

    case 'SET_QUANTITY': return {
        ...state,
        quantity: action.payload,
    }

    case 'NEXT_STEP': return {
        ...state,
        step: state.step + 1,
    }

    default: return state
    }
}

// PROVIDER
function UserProvider({ children }: {children: ReactNode}) {
    // REDUCER
    const [state, dispatch] = useReducer(reducer, initialState)

    // FUNCTIONS
    const setUsername = (username: string) => dispatch({ type: 'SET_USERNAME', payload: username })
    const setPlatform = (platform: 'Android' | 'iPhone' | 'PC' | 'Xbox') => dispatch({ type: 'SET_PLATFORM', payload: platform })
    const setQuantity = (quantity: 500 | 800 | 1200 | 2000) => dispatch({ type: 'SET_QUANTITY', payload: quantity })
    const nextStep = () => {
        dispatch({ type: 'NEXT_STEP', payload: null })
        if (state.step === 0) {
            setTimeout(() => {
                dispatch({ type: 'NEXT_STEP', payload: null })
                setTimeout(() => {
                    dispatch({ type: 'NEXT_STEP', payload: null })
                }, 4000)
            }, 7000)
        }
        if (state.step === 3) {
            setTimeout(() => {
                dispatch({ type: 'NEXT_STEP', payload: null })
                setTimeout(() => {
                    dispatch({ type: 'NEXT_STEP', payload: null })
                }, 4000)
            }, 7000)
        }
    }

    // RETURN
    return (
        <UserContext.Provider value={{
            ...state,
            setUsername,
            setPlatform,
            setQuantity,
            nextStep,
        }}
        >
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }
