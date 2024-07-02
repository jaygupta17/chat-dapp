import {User} from "@nextui-org/user";
import { UserCircleIcon } from "lucide-react";

interface AvatarProps{
    name:string;
    descr:string;
    img:string;
}
export function Avatar({name,descr,img} : AvatarProps) {
    return  <User   
    name={name}
    classNames={{
      name:"text-lg",
      description:"text-md",
      base:"w-full gap-x-4 justify-start"
    }}
    description={descr}
    avatarProps={{
      src: "https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM=",
      size:"lg",
      radius :"full"
    }}
  />
}