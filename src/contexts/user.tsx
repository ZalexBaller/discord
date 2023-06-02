// IMPORTS
import {
    ReactNode, createContext, useReducer, useEffect,
} from 'react'
import { useRouter } from 'next/router'

// TYPES
type Action = {
    type: string,
    payload: any
}

// INITIAL STATE
const initialState = {
    step: 0,
    username: null,
    platform: 'Android',
    quantity: 500,
    locker: 'https://appinstallcheck.com/cl/i/2lm2wd',
    setUsername: (username: string) => {},
    setPlatform: (platform: 'Android' | 'iPhone' | 'PC' | 'Xbox') => {},
    setQuantity: (quantity: number) => {},
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

    case 'SET_LOCKER': return {
        ...state,
        locker: action.payload,
    }

    default: return state
    }
}

// PROVIDER
function UserProvider({ children }: {children: ReactNode}) {
    // VARIABLES
    const { locale } = useRouter()

    // REDUCER
    const [state, dispatch] = useReducer(reducer, initialState)

    // FUNCTIONS
    async function fetchLocker(): Promise<void> {
        const fetchedData = await fetch(`/api/locker?locale=${locale}`)
        const jsonData = await fetchedData.json()
        dispatch({ type: 'SET_LOCKER', payload: jsonData.locker })
    }
    const setUsername = (username: string) => dispatch({ type: 'SET_USERNAME', payload: username })
    const setPlatform = (platform: 'Android' | 'iPhone' | 'PC' | 'Xbox') => dispatch({ type: 'SET_PLATFORM', payload: platform })
    const setQuantity = (quantity: number) => dispatch({ type: 'SET_QUANTITY', payload: quantity })
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

    // EFFECTS
    useEffect(() => {
        fetchLocker()
    }, [locale])

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
