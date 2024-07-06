"use client"

import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface Context{
    test:string;
    setTest: Dispatch<SetStateAction<string>>
}
export const Appwrite = createContext<Context | null>(null)
export function AppwriteProvider({children}:{children:ReactNode}) {
    const [token , setToken] = useState<any>()
    const [test,setTest] = useState("Done")
    return(
        <Appwrite.Provider value={{test,setTest}}>
            {children}
        </Appwrite.Provider>
    )
}
