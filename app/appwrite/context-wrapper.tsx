import { ReactNode } from "react";
import { AppwriteProvider as DefaultAppwriteProvider } from "./context";
export function AppwriteProvider({children}:{children : ReactNode}) {
    return(
        <DefaultAppwriteProvider>
            {children}
        </DefaultAppwriteProvider>
    )
}