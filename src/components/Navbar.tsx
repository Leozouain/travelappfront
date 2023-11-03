import { useState } from "react"
import { NAV_LINKS } from "../constants"



const Navbar = () => {

    const [menu, setmenu] = useState(false)

    const handleMenu = () => {
        setmenu(!menu)
    }

    return (
        <nav className="flexBetween max-container padding-container relative z-30 py-5">



            <a href="/" className={`${menu && 'hidden'} flex justify-center items-center
            font-extrabold `} >
                <img src="/fulllogo.png" alt="logo" width={90}
                    className="h-[full] overflow-hidden" />
                <p className="text-[rgb(26,51,116)] text-2xl">FLY DRONE DF</p>
            </a>


            <ul className={`hidden h-full gap-12 lg:flex`}>
                {NAV_LINKS.map((link) => (
                    <a href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                        {link.label}
                    </a>
                ))}
            </ul>

            {menu &&
                <div className="block">
                    <div className="flex  ">

                        <a href="/" className="lg:hidden absolute flex justify-center items-center  " >
                            <img src="/fulllogo.png" alt="logo" width={90}
                                className="h-[full] overflow-hidden" />
                            <p className="text-[rgb(26,51,116)] text-2xl font-extrabold ">FLY DRONE DF</p>
                        </a>
                        <div className="  justify-center items-center mt-10">

                            <ul className={`pt-5 bg-white  h-full lg:hidden flex flex-col justify-center w-screen`}>
                                {NAV_LINKS.map((link) => (
                                    <>
                                        <a href={link.href} key={link.key}
                                            className="text-20 text-gray-50 
                                         items-center cursor-pointer pb-1.5 
                                         transition-all hover:font-bold p-3">
                                            {link.label}
                                        </a>
                                        <div className="border bg-gray-20" />
                                    </>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>


            }


            <img
                onClick={handleMenu}
                src="menu.svg"
                alt="menu"
                width={32}
                height={32}
                className={`flex cursor-pointer lg:hidden absolute right-4 top-4 
                ${!menu && 'hidden'} rotate-90`}
            />
            <img
                onClick={handleMenu}
                src="menu.svg"
                alt="menu"
                width={32}
                height={32}
                className={`flex cursor-pointer lg:hidden absolute right-4 top-4 
                ${menu && 'hidden'} `}
            />
        </nav>
    )
}
export default Navbar