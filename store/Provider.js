import Context from './Context'
import {useReducer} from 'react'
import reducer, {initState} from './reducer'

function Provider({children}) {
    const [state, dispash] = useReducer(reducer, initState)
    return (
        <Context.Provider value={[state, dispash]}>
            {children}
        </Context.Provider>
    )
}

export default Provider