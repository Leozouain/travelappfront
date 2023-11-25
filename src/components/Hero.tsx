
import Button from "./Button"
import videoBg from '../assets/catedral.mp4'




const Hero = () => {
    return (
        <section className=" relative max-container padding-container flex flex-col 
        gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row "
            id="home">
            <div className="hidden xl:block absolute bg-[#0000003a] w-full h-full z-10 left-[0px] top-[0px] w-10 lg:w-[-50px]">


            </div>
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
                <h1 className="bold-52 lg:bold-88 xl:text-white">
                    Voe Mais Alto!
                </h1>
                <p className="regular-16 mt-6 xl:text-white text-gray-30 xl:max-w-[520px]">
                    "Nós da <span className="font-extrabold">Fly Drone DF</span>, somos apaixonados por transformar
                    momentos em obras-primas cinematográficas. Com nossa expertise em
                    filmagem com drones e edição de vídeo, elevamos a narrativa visual
                    a novos patamares.
                    Cada voo é uma busca pela perfeição, cada edição uma obra de arte.
                </p>

                <div className="my-11 flex flex-wrap gap-5">


                    {/* Buttons Wrapper bellow */}

                    <div className="flex w-full flex-col gap-3 sm:flex-row">
                        <a href="#contato">
                            <Button

                                type="button"
                                title="Vamos Decolar Juntos!"
                                variant="btn_green"
                                icon="/drone_icon.png"

                            />
                        </a>

                    </div>

                </div>

            </div>


            {/* right side  */}



            <div className=" flex xl:flex-1 flex-col  lg:w-screen   overflow-hidden justify-center" >
                <div className="  xl:absolute w-[100%] h-[100%] top-0 left-0 bg-[#6dc9da18] z-10"
                >

                </div>
                <div className="hidden xl:flex  xl:absolute h-[70vh] w-full xl:w-[100%]
                 xl:h-[100%] top-0 left-0 bg-cover bg-center m-0 p-0
                "
                >
                    <video src={videoBg}
                        autoPlay
                        loop
                        muted
                        className="w-[100%] h-[100%] object-cover"
                    ></video>

                </div>
                {/* <div className="flex xl:hidden  xl:absolute h-[70vh] w-full xl:w-[100%] xl:h-[100%] top-0 left-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url(https://mail.google.com/mail/u/0?ui=2&ik=1a6f6aa4ed&attid=0.0.3&permmsgid=msg-f:1783223294506149460&th=18bf4823703da654&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ9iRZtO27W8WPiYL1wB777xJWKDrRWxA5_d3SniLQBQBH4Xqu0KebA963kTmjtqL-qlYS5Z9_oSBBfeqauNSsxqnu47ONg0ck89-4oTT2fmRmZ4PkF86xMQggM&disp=emb&realattid=18bf4818537eb1fdddb4)' }} >

                </div> */}
                <div className="flex xl:hidden  xl:absolute h-[70vh] w-full xl:w-[100%] xl:h-[100%] top-0 left-0 bg-cover bg-center"
                > <video src={videoBg}
                    autoPlay
                    loop
                    muted
                    className="w-[100%] h-[100%] object-cover"
                ></video>

                </div>


            </div>
        </section>
    )
}
export default Hero