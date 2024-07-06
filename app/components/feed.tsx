import {ScrollShadow} from "@nextui-org/scroll-shadow";
import { users } from "./dummy-data";
import { Avatar } from "./avatar";
import { Divider } from "@nextui-org/divider";
import { Link } from "@nextui-org/link";

export function Feed() {
    return(
        <div>
            <ScrollShadow hideScrollBar size={30} className="w-full h-[90svh] md:w-[80vw] flex flex-col justify-start items-start">
            {users.map((user)=>(
                <>
                  <Link className="w-full hover:bg-primary-900/10 flex flex-col justify-center p-3" href={"/jaygupta17/#last"} color="foreground">
                  <Avatar key={user.name} name={user.name} img={user.img} descr={user.descr}/>
                  </Link>
                  <Divider />
                </>
            ))}
            </ScrollShadow>
            
        </div>
    )
}