

const Guide = () => {
    return (
        <section className="flexCenter flex-col">
            <div className=" padding-container max-container
            w-full pb-24">
                <img
                    src="/fulllogo.png"
                    alt="camp"
                    width={50}
                    height={50}

                />
                <p className="regular-18 -mt-1 mb-3 text-[rgb(26,51,116)]">
                    ESTAMOS AQUI POR VOÇÊ
                </p>
                <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
                    <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
                        Qualidade, Consistência e Rapidez
                    </h2>
                    <p className="regular-16 text-gray-30 xl:max-w-[520px]">
                        Nosso compromisso com a 'Qualidade, Consistência e Rapidez'
                        é o alicerce do nosso negócio de drones. Com uma atenção meticulosa aos
                        detalhes, garantimos que cada filmagem seja uma obra-prima, cada vez.
                        A consistência em nossa entrega garante que você sempre receba o melhor,
                        não importa quando ou onde. E nossa habilidade de resposta rápida significa que
                        estaremos lá para capturar os momentos que importam, sem demora. Quando você
                        nos escolhe, está escolhendo um padrão de excelência que tornará seu projeto
                        único e notável. Transforme suas
                        visões em realidade com a nossa abordagem dedicada a qualidade, consistência
                        e rapidez.
                    </p>

                </div>
            </div>

            <div className="flexCenter max-container relative w-full h-[580px] overflow-hidden rounded-xl  ">
                <img
                    className="lg:block hidden w-full object-cover object-center 2xl:rounded-5xl"
                    src='/drone-photo-3.jpg'
                    alt="boat"
                    width={1440}
                    height={580}
                />

                <div className="lg:absolute flex bg-white py-8 pl-5 pr-7 gap-3
                rounded-3xl border shadow-md md:left-[5%] lg:top-20">
                    <img
                        className="h-full w-auto"
                        src="/meter.svg"
                        alt="meter"
                        width={16}
                        height={158}
                    />
                    <div className="flexBetween flex-col">
                        <div className="flex w-full flex-col">

                            <p className="bold-20 mt-2">
                                Nos conte sobre o seu projeto
                            </p>

                            <p className="regular-16 text-gray-20">
                                Nos conte detalhes do seu projeto
                            </p>

                        </div>
                        <div className="flex w-full flex-col">

                            <p className="bold-20 mt-2">
                                Agendaremos um voô.
                            </p>

                            <p className="regular-16 text-gray-20">
                                Um de nossos pilotos irá até o seu local.
                            </p>

                        </div>
                        <div className="flex w-full flex-col">

                            <p className="bold-20 mt-2">
                                Receba suas imagens digitalmente
                            </p>

                            <p className="regular-16 text-gray-20">
                                Enviamos suas imagens via E-mail em até 24hrs
                                <br />
                                <span className="text-red-500">para serviços com edição por favor entre em contato conosco</span>
                            </p>

                        </div>


                    </div>

                </div>

            </div>

        </section>
    )
}
export default Guide