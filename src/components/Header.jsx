import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <header>
            <div className="max-w-350 px-4 mx-auto flex justify-between py-9.5">
                <h2 className="font-gebril text-xl sm:text-2xl md:text-[28px]">
                    Elementum
                </h2>
                <div className={`absolute md:static bg-white md:bg-transparent w-[60vw] md:w-[unset]
                h-screen top-0 ${openMenu ? "right-0" : "-right-full"} shadow-sm md:shadow-none shadow-black flex md:block
                justify-center items-center transition-all duration-300 ease-linear`}>
                    <button
                        className="md:hidden absolute top-5 right-5 text-5xl cursor-pointer"
                        onClick={() => setOpenMenu(false)}
                    >
                        <IoClose />
                    </button>
                    <ul className="flex flex-col md:flex-row items-center gap-x-12 lg:gap-x-16
                    gap-y-10 *:font-satoshi-medium
                *:font-medium *:cursor-pointer *:hover:text-amber-500 *:transition-all
                *:duration-200 *:ease-linear">
                        <li>Home</li>
                        <li>Studio</li>
                        <li>Services</li>
                        <li>Contact</li>
                        <li>FAQ's</li>
                    </ul>
                </div>

                <button
                    className="md:hidden border-t-2 border-b-2 h-2.75 w-11 self-center cursor-pointer"
                    onClick={() => setOpenMenu(true)}
                >
                </button>
            </div>
        </header>
    )
}

export default Header;