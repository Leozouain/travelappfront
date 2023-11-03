
import Button from "./Button"
import videoHero from '../assets/production_id_4193140 (1440p).mp4'
import background from '../../public/hero-drone.jpg'


const Hero = () => {
    return (
        <section className=" relative max-container padding-container flex flex-col 
        gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row ">
            <div className=" " />
            {/* LEFT SIDE */}


            <div className="relative z-20 flex-1 flex-col xl:w-1/2">
                <img
                    src='/fulllogo.png'
                    alt="drone"
                    width={80}
                    height={80}
                    className="absolute left-[-5px] top-[-30px] w-10 lg:w-[-50px]"
                />
                <h1 className="bold-52 lg:bold-88">
                    Voe Mais Alto!
                </h1>
                <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
                    "Nós da <span className="font-extrabold">Fly Drone DF</span>, somos apaixonados por transformar
                    momentos em obras-primas cinematográficas. Com nossa expertise em
                    filmagem com drones e edição de vídeo, elevamos a narrativa visual
                    a novos patamares.
                    Cada voo é uma busca pela perfeição, cada edição uma obra de arte.
                </p>

                <div className="my-11 flex flex-wrap gap-5">
                    {/* <div className="flex item-center gap-2">
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


                    </div> */}

                    {/* Buttons Wrapper bellow */}

                    <div className="flex w-full flex-col gap-3 sm:flex-row">
                        <Button
                            type="button"
                            title="Vamos Decolar Juntos!"
                            variant="btn_green"

                        />
                        {/* <Button
                            type="button"
                            title="How we work?"
                            icon="/play.svg"
                            variant="btn_white_text"
                        /> */}
                    </div>

                </div>

            </div>


            {/* right side  */}



            <div className=" flex xl:flex-1 flex-col  lg:w-screen   overflow-hidden justify-center" >
                <div className="  xl:absolute w-[100%] h-[100%] top-0 left-0 bg-[#6dc9da18] z-10"
                >

                </div>
                <div className="hidden xl:flex  xl:absolute h-[70vh] w-full xl:w-[100%] xl:h-[100%] top-0 left-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/flying-drone-up-blue-sky-background_1150-4238.jpg?w=1380&t=st=1698971227~exp=1698971827~hmac=d272e4b6962f1ae1231777a3c6365ddce0b1f38d003dd4640ae512d895e919d6)' }} >

                </div>
                <div className="flex xl:hidden  xl:absolute h-[70vh] w-full xl:w-[100%] xl:h-[100%] top-0 left-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/man-with-drone-mountains-flying-clouds_158595-6117.jpg?w=740&t=st=1698973712~exp=1698974312~hmac=e3159951a41240eca7e5e2aa7bf0bc84cb7252f0de06b144b6b1c1e30097a95a)' }} >

                </div>
                {/* <video
                        className="flex flex-1 overflow-hidden object-cover w-[100%] h-[100%]"
                        src={videoHero} autoPlay loop muted></video> */}
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