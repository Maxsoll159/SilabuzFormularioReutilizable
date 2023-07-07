import { useState } from "react"

const useForn = (initialState) =>{
    const [state, setState] = useState(initialState)

    const handleChange = (e) =>{
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    
    return [state, handleChange]
}


export default useForn
