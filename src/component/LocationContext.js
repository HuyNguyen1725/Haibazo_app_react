import { createContext, useState } from "react";

export const LocationContext = createContext()

export function LocationProvider({children}) {
    const [category, setCategory] = useState("")
    const [child, setChild] = useState("")

    return (
        <LocationContext.Provider value={{category, setCategory, child, setChild}}>
            {children}
        </LocationContext.Provider>
    )
}

