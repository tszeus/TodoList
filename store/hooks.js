import Context from './Context'
import {useContext} from 'react'

export const useStore = () => {
    const [state, dispash] = useContext(Context)
    return [state, dispash]
}