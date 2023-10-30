import { useState } from "react"
import { NAV_LINKS } from "../constants"



const Navbar = () => {

    const [menu, setmenu] = useState(false)

    const handleMenu = () => {
        setmenu(!menu)
    }

    return (
        <nav className="flexBetween max-container padding-container relative z-30 py-5">



            <a href="/" className={`${menu && 'hidden'} lg:block`} >
                <img src="/hilink-logo.svg" alt="logo" width={74} height={29} />
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

                        <a href="/" className="lg:hidden absolute  " >
                            <img src="/hilink-logo.svg" alt="logo" width={74} height={29} />
                        </a>
                        <div className="  justify-center items-center">

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