

interface CampProps {
    backgroundImage: string
    title: string
    subtitle: string
    peopleJoined?: string
    id: string
}

const Campsite = ({ backgroundImage, title, subtitle, id }: CampProps) => {
    return (
        <div
            id={id}
            className={`h-full w-full min-w-full xl:min-w-[1100px] ${backgroundImage} bg-cover
        bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
            <div className="flex h-full flex-col items-start justify-between
                p-6 lg:px-20 ">

                <div className="flexCenter gap-4">
                    <div className="rounded-3xl bg-[rgba(26,51,116,0.34)] p-2">
                        <img
                            src="/drone_icon.png"
                            alt="map"
                            width={28}
                            height={28}
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <h4 className="bold-18 text-white">{title}</h4>
                        <p className="regular-14 text-white">{subtitle}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

const Camp = () => {

    return (
        <section className=" 2xl:max-container 
        relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20"
            id="aboutus">
            <div className="hide-scrollbar flex h-[340px] w-full items-start
            justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]  ">
                <Campsite
                    id='slide1'
                    backgroundImage="bg-bg-img-1"
                    title="Ponte JK"
                    subtitle="Brasilia - DF"
                    peopleJoined="50+ Joined"
                />

                <Campsite
                    id='slide2'
                    backgroundImage="bg-bg-img-2"
                    title="Explanada dos Ministerios"
                    subtitle="Brasilia - DF"
                    peopleJoined="50+ Joined"
                />



            </div>


            {/* GREEN ADD OVERFLOW */}
            <div className=" flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
                <div className="bg-[rgb(26,51,116)] p-8 lg:max-w-[500px] xl:max-w-[734px]
                xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
                    <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
                        Não sabe o que fazer para valorizar o seu <strong>evento</strong> ou <strong>negócio</strong>??
                    </h2>
                    <p className="regular-14 xl:regular-16 mt-5 text-white">
                        "Deixe-nos mostrar o caminho! Com nossa paixão por capturar
                        momentos extraordinários e transformá-los em experiências
                        inesquecíveis, oferecemos uma gama de serviços de filmagem
                        com drones e edição de vídeo de última geração. Do registro
                        aéreo de tirar o fôlego ao storytelling envolvente, nossa equipe
                        especializada está pronta para elevar sua visão e proporcionar
                        resultados que deixarão uma impressão duradoura. Transforme seu
                        evento ou negócio em algo verdadeiramente memorável com o poder
                        da filmagem com drones e edição criativa.
                    </p>
                    <img
                        src='/drone_icon.png'
                        alt="camp-2"
                        width={186}
                        height={219}
                        className="camp-quote opacity-20"
                    />
                </div>

            </div>

        </section>
    )
}
export default Camp