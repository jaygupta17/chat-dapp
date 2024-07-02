import {ScrollShadow} from "@nextui-org/scroll-shadow";
import { users } from "./dummy-data";
import { Avatar } from "./avatar";
import { Divider } from "@nextui-org/divider";
import { Link } from "@nextui-org/link";

export function Feed() {
    return(
        <div>
            <ScrollShadow hideScrollBar className="w-full h-[90dvh] md:w-[80vw] flex flex-col gap-y-3 justify-start items-start">
            {users.map((user)=>(
                <>
                  <Link className="w-full flex flex-col justify-center p-3" isBlock href={"/chat/jaygupta17"} color="foreground">
                  <Avatar key={user.name} name={user.name} img={user.img} descr={user.descr}/>
                  </Link>
                  <Divider />
                </>
            ))}
            </ScrollShadow>
            
        </div>
    )
}