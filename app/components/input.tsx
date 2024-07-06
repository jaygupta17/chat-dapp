import { Button } from "@nextui-org/button";
import {Input} from "@nextui-org/input";
export function MsgInput() {
    return(
        <div className="h-[8svh] w-full grid gap-x-1 grid-cols-7">
            <Input className="col-span-5" size="sm" type="text" label="Message" disableAnimation/>
            <Button size="lg">Send</Button>
        </div>
    )
}