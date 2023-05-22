import { SIDEBAR_MENU } from "@/utils/data";
import Logo from "./Logo";
import Item from "./Item";
import {BiLogOut} from 'react-icons/bi'
import SidebarTweetButton from "./SidebarTweetButton";

const Sidebar = () => {
    return (
        <div className="col-span-1 h-full pr-4 md:pr-6">
            <div className="flex flex-col items-end">
                <div className="space-y-2 lg:w-[230px]">
                    <Logo />
                    {SIDEBAR_MENU.map((_) => <Item
                        key={_.href}
                        href={_.href} 
                        label={_.label}
                        icon={_.icon}
                    />)}
                    <Item onClick={() => {}} icon={BiLogOut} label="Logout"/>
                    <SidebarTweetButton/>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;