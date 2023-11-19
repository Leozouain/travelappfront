import { FOOTER_CONTACT_INFO, SOCIALS } from "../constants"


const Footer = () => {
    return (
        <footer className="flexCenter mb-24">

            <div className="padding-container max-container flex w-full flex-col gap-14">
                <div className="flex flex-col items-start justify-center gap-[10%] 
                md:flex-row">

                    <a href="/" className={` flex justify-center items-center
            font-extrabold `} >
                        <img src="/fulllogo.png" alt="logo" width={90}
                            className="h-[full] overflow-hidden" />
                        <p className="text-[rgb(26,51,116)] text-2xl">FLY DRONE DF</p>
                    </a>
                    <div className="flex flex-wrap gap-10 sm:justify-evenly md:flex-1">

                        <div className="flex flex-col gap-5">
                            <FooterColumn
                                title={FOOTER_CONTACT_INFO.title}
                            >
                                {FOOTER_CONTACT_INFO.links.map(link => (
                                    <a
                                        href='/'
                                        key={link.label}
                                        className="flex gap-4 md:flex-col lg:flex-row"
                                    >
                                        <p className="whitespace-nowrap">
                                            {link.label}
                                        </p>
                                        <p className="medium-14 whitespace-nowrap">
                                            {link.value}
                                        </p>
                                    </a>
                                ))}
                            </FooterColumn>
                        </div>
                        {/* SOCIALS  */}
                        <div className="flex flex-col gap-1">
                            <FooterColumn
                                title={SOCIALS.title}
                            >
                                <ul className="regular-14 flex gap-4 text-gray-30">
                                    {SOCIALS.links.map(link => (
                                        <a
                                            href={link.link}
                                            key={link.link}
                                            target="__blank"
                                        >
                                            <img
                                                src={link.logo}
                                                alt="logo"
                                                width={24}
                                                height={24}
                                            />
                                        </a>
                                    ))}

                                </ul>
                            </FooterColumn>

                        </div>

                    </div>


                </div>

                <div className="border bg-gray-20" />
                <p className="regular-14 w-full text-center text-gray-30">
                    2023 FlyDrone DF | Todos direitos reservados
                </p>

            </div>
        </footer>
    )
}

type FooterColumnProps = {
    title: string
    children: React.ReactNode
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
    return (
        <div className="flex flex-col gap-5">
            <h4 className="bold-18 whitespace-nowrap">{title}</h4>
            {children}
        </div>
    )
}
export default Footer