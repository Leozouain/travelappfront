
import Button from "./Button"
import videoHero from '../assets/production_id_4193140 (1440p).mp4'

const Hero = () => {
    return (
        <section className="max-container padding-container flex flex-col 
        gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row ">
            <div className="" />
            {/* LEFT SIDE */}

            <div className="relative z-20 flex-1 flex-col xl:w-1/2">
                <img
                    src='/camp.svg'
                    alt="camp"
                    width={50}
                    height={50}
                    className="absolute left-[-5px] top-[-30px] w-10 lg:w-[-50px]"
                />
                <h1 className="bold-52 lg:bold-88">
                    Putuk Truno Camp Area
                </h1>
                <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
                    We want to be on each of your journeys seeking the
                    satisfaction of seeing the incorruptible beauty of nature.
                    We can help you on an adventure around the world in just one app
                </p>

                <div className="my-11 flex flex-wrap gap-5">
                    <div className="flex item-center gap-2">
                        {Array(5).fill(1).map((_, index) => (
                            <img
                                src="/star.svg"
                                key={index}
                                alt="star"
                                width={24}
                                height={24}
                            />
                        ))}

                        <p className="bold-16 lg:bold-20 text-blue-70">
                            198k
                            <span className="regular-16 lg:regular-20 ml-1">
                                Excellent Reviews
                            </span>
                        </p>


                    </div>

                    {/* Buttons Wrapper bellow */}

                    <div className="flex w-full flex-col gap-3 sm:flex-row">
                        <Button
                            type="button"
                            title="Download App"
                            variant="btn_green"
                        />
                        <Button
                            type="button"
                            title="How we work?"
                            icon="/play.svg"
                            variant="btn_white_text"
                        />
                    </div>

                </div>

            </div>

            <div className="relative flex flex-1 items-center    overflow-hidden justify-center" >
                <div >
                    <video
                        className="aspect-video"
                        src={videoHero}
                        autoPlay muted loop
                        width='100%'
                        height='100%'></video>


                    {/* <iframe
                        className="w-full aspect-video "
                        height='700' width={2000} cov
                        src="https://www.youtube.com/embed/NcBjx_eyvxc?mute=1&autoplay=1&transparent=1 "
                        title="Madeira | Cinematic FPV"

                        allow=" transparent; autoplay; "
                    /> */}
                </div>
                {/* <div className="relative flex z-20 w-[268px] flex-col gap-8
                rounded-3xl bg-green-90 px-7 py-8">
                    <div className="flex flex-col">
                        <div className="flexBetween">
                            <p className="regular-16 text-gray-20">
                                Location
                            </p>
                            <img src="/close.svg"
                                alt="close"
                                width={24}
                                height={24} />

                        </div>

                        <p className="bold-20 text-white">
                            Aguas Calientes
                        </p>

                        <div className="flexBetween">
                            <div className="flex flex-col">
                                <p className="regular-16 block text-gray-20">
                                    Distance

                                </p>
                                <p className="bold-20 text-white">
                                    173.28 mi
                                </p>

                            </div>
                            <div className="flex flex-col">
                                <p className="regular-16 block text-gray-20">
                                    Elevation

                                </p>
                                <p className="bold-20 text-white">
                                    2.040 km
                                </p>

                            </div>
                        </div>

                    </div>

                </div> */}

            </div>
        </section>
    )
}
export default Hero