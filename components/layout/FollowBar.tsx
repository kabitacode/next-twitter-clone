import { useRouter } from "next/router";
import { FaFeather } from "react-icons/fa";

const FollowBar = () => {
    const router = useRouter()

    return (
        <div className="px-6 py-4 hidden lg:block">
            <div className="bg-neutral-800 rounded-xl p-4">
                <div className="text-white text-xl font-semibold">Who to follow</div>
                <div className="flex flex-col gap-6 mt-4">
                {/* TODO USER LIST */}
                
                </div>
            </div>
        </div>
    )
}

export default FollowBar;