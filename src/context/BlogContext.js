import React, { useReducer } from 'react'

const BlogContext = React.createContext()

const reducer = (state, action) => {
    switch (action.type) {
        case 'increase':
            return state + 1
        case 'decrease':
            return state - 1
        default:
            return state
    }
}

export const BlogProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, 0)
    return (
        <BlogContext.Provider value={{value: state, dispatch}}>
            {children}
        </BlogContext.Provider>
    )
}

export default BlogContext