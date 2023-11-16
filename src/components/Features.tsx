import { FEATURES } from "../constants"




const Features = () => {
    return (
        <section className=" flex-col flexCenter overflow-hidden
        bg-feature-bg bg-center bg-no-repeat py-24">
            <div className="max-container padding-container relative w-full justify-end
            flex">

                {/* left side  */}
                <div className="flex flex-1 lg:min-h-[900px] bg-black mr-5 relative rounded-5xl"
                >
                    <img
                        className="lg:block hidden w-full object-cover object-center rounded-5xl"
                        src='/drone-photo-4.jpg'
                        alt="drone brasilia"
                        width={1440}
                        height={580}
                    />


                </div>

                {/* right side */}
                <div className="z-20 flex w-full flex-col lg:w-[60%]">
                    <div className="relative">
                        <img className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"
                            src='/fulllogo.png'
                            alt="flydronelogo"
                            width={50}
                            height={50}
                        />
                        <h2 className="bold-40 lg:bold-64">
                            Nossos Serviços
                        </h2>

                    </div>
                    <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mt-20 lg:gap-20">
                        {FEATURES.map(feature => (
                            <FeatureItem
                                title={feature.title}
                                key={feature.title}
                                icon={feature.icon}
                                description={feature.description}
                            />
                        ))}
                    </ul>
                </div>

            </div>




        </section >
    )
}

type FeatureItem = {
    title: string
    icon: string
    description: string
}

const FeatureItem = ({ title, icon, description }: FeatureItem) => {
    return (
        <li className="flex w-full flex-1 flex-col items-start">
            <div className="rounded-full p-4 lg:p-7 bg-[rgb(26,51,116)]">
                <img

                    src={icon}
                    alt="map"
                    width={28}
                    height={28}

                />

            </div>
            <h2 className="bold-20 lg:bold-32 mt-5 capitalize ">{title} </h2>
            <p className="regular-16 mt-5  bg-white/80 text-gray-30 
            lg:mt-[30px] lg:bg-none">
                {description}
            </p>

        </li>
    )
}

export default Features