import { Avatar } from "@/components/avatar";
import { ChatNav } from "@/components/chat-nav";
import { ReactNode } from "react";


function Layout({children,params}:{children : ReactNode , params:{user: string}}) {

    return(
                <div className="h-[100svh] pt-2 px-2 overflow-hidden">
                    <Avatar name="Jay G" descr="Wierd" img="/vercel.svg"/>
                    <ChatNav/>
                    {children}
                </div>
    )
}

export default Layout