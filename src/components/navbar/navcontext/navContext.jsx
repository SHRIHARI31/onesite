import React, { createContext, useState } from "react";

export const TogglerContext = createContext()

export const ToggleProvider = ({children}) => {
    const [state, setState] = useState(false)
    return(
        <TogglerContext.Provider value={{state, setState}}>
             {children}
        </TogglerContext.Provider>
    )
}