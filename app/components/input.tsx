import { Button } from "@nextui-org/button";
import {Input} from "@nextui-org/input";
export function MsgInput() {
    return(
        <div className="h-[8vh] grid  gap-x-2 grid-cols-2">
            <Input size="sm" type="text" label="Message" disableAnimation/>
            <Button size="lg">Send</Button>
        </div>
    )
}