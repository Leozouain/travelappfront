
import { useState } from "react"
import Button from "./Button"
import emailjs from '@emailjs/browser'

const GetApp = () => {

    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [msg, setMsg] = useState('')


    function sendEmail(e: { preventDefault: () => void }) {
        e.preventDefault()

        if (name === '' || lastName === '' || email === '' || phone === '' || msg === '') {
            alert('Preencha todos os campos')
            return
        }

        const templateParams = {
            from_name: name,
            last_name: lastName,
            phone: phone,
            message: msg,
            email: email
        }

        emailjs.send('service_j8on8pn', 'template_ann8qt9', templateParams, '5dcM9dePuT6e86N-G')
            .then((res) => {
                console.log('email enviado', res.status, res.text)
                setName('')
                setLastName('')
                setEmail('')
                setPhone('')
                setMsg('')
            }, (err) => {
                console.log("ERR", err)
            })
    }


    return (
        <section className="flexCenter w-full flex-col pb-[100px]">
            <div className="get-app ">
                {/* left side   */}
                <div className="z-20 flex flex-1 flex-col w-full justify-center 
                items-start gap-12">

                    <h2 className=" bold-40 lg:bold-64 xl:max-w-[520px]">
                        Entre em contato agora!
                    </h2>


                </div>



                {/* right side  */}
                <div className="flex flex-1 items-center justify-center lg:justify-end">
                    <form action="mailto:leozouain@gmail.com"
                        method="POST"
                        onSubmit={sendEmail}
                        className=" ">
                        <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-white">
                                        Nome
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            value={name}
                                            onChange={e => setName(e.target.value)}
                                            type="text"
                                            name="first-name"
                                            id="first-name"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-white">
                                        Sobrenome
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            value={lastName}
                                            onChange={e => setLastName(e.target.value)}
                                            type="text"
                                            name="last-name"
                                            id="last-name"
                                            autoComplete="sobrenome"
                                            className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">
                                        Email
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                            type="email"
                                            name="email"
                                            id="email"
                                            autoComplete="email"
                                            className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-white">
                                        Telefone
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            value={phone}
                                            onChange={e => setPhone(e.target.value)}
                                            type="tel"
                                            name="phone-number"
                                            id="phone-number"
                                            autoComplete="tel"
                                            className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="message" className="block text-sm font-semibold leading-6 text-white">
                                        Mensagem
                                    </label>
                                    <div className="mt-2.5">
                                        <textarea
                                            value={msg}
                                            onChange={e => setMsg(e.target.value)}
                                            name="message"
                                            id="message"
                                            rows={4}
                                            className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"

                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8 flex justify-end">

                                <Button

                                    type="submit"
                                    title="Enviar"
                                    variant="btn_green"
                                    icon="/drone_icon.png"
                                    full
                                />
                            </div>
                        </div>
                    </form>

                </div>

            </div>
        </section>
    )
}
export default GetApp