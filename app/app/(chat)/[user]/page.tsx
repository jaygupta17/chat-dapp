import { MsgInput } from "@/components/input";
import { Messages } from "@/components/messages";

export default function page() {
    return(
        <div className="flex gap-y-2 p-4 items-center flex-col">
            <Messages/>
            <MsgInput/>
        </div>
    )
}