
import Button from "./Button"

const GetApp = () => {
    return (
        <section className="flexCenter w-full flex-col pb-[100px]">
            <div className="get-app ">
                {/* left side   */}
                <div className="z-20 flex flex-1 flex-col w-full justify-center 
                items-start gap-12">

                    <h2 className=" bold-40 lg:bold-64 xl:max-w-[320px]">
                        Get for free now!
                    </h2>

                    <p className="regular-16 text-gray-10">
                        Available on iOS and Android
                    </p>
                    <div className=" flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
                        <Button
                            type="button"
                            title="App Store"
                            icon="/apple.svg"
                            variant="btn_white"
                            full
                        />
                        <Button
                            type="button"
                            title="Play Store"
                            icon="/android.svg"
                            variant="btn_dark_green_outline"
                            full
                        />


                    </div>
                </div>



                {/* right side  */}
                <div className="flex flex-1 items-center justify-end">
                    <img
                        src="/phones.png"
                        alt="phones"
                        width={550}
                        height={870}
                    />

                </div>

            </div>
        </section>
    )
}
export default GetApp