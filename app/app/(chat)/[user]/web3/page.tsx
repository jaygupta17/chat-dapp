import { MsgInput } from "@/components/input";
import { Messages } from "@/components/messages";

export default function page() {
    return(
        <div className="h-[90svh] w-full p-4 grid">
            <Messages/>
            <MsgInput/>
        </div>
    )
}