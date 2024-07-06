"use client"
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { useParams, usePathname, useSearchParams } from "next/navigation";

export function ChatNav() {
    const pathname = usePathname()
    const {user} = useParams()
    return(
        <div className="grid grid-cols-2 gap-x-3">
            <Button isDisabled={pathname=="/"+user} className="rounded-sm px-0" >
                <Link href={"/"+user + "/#last"} className="h-full w-full flex justify-center text-foreground">
                    Web2
                </Link>
            </Button>
            <Button isDisabled={pathname=="/"+user+"/web3"} className="rounded-sm px-0" >
                <Link href={"/"+user+"/web3"} className="h-full w-full flex justify-center text-foreground">
                    Web3
                </Link>
            </Button>
        </div>
    )
}