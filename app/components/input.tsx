"use client"
import { Appwrite } from "@/appwrite/context";
import { Button } from "@nextui-org/button";
import {Input} from "@nextui-org/input";
import { useContext } from "react";
export function MsgInput() {
    const context = useContext(Appwrite)
    
    return(
        <div className="h-[8svh] w-full grid gap-x-1 grid-cols-7">
            <Input className="col-span-5" size="sm" type="text" label="Message" disableAnimation/>
            <Button size="lg">Send</Button>
        </div>
    )
}