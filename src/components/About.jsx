
function About() {
    return (
        <>
            <section className=" text-center flex flex-col" id='about'>
                <div className="m-5">
                    <h1 className="font-semibold mb-1 not-italic text-2xl">
                        We are a powerhouse of digital expertise, breaking away from the mundane to deliver exceptional
                        marketing, multimedia, and branding solutions. From vision to execution, our team combines deep industry
                        knowledge with a creative spark
                    </h1>
                </div>
                <div className="flex justify-around">
                    <h1 className="font-semibold mt-12 not-italic text-3xl">
                        <span className="text-title-left">Our</span>
                        <span className="text-title-right"> Experts</span>
                    </h1>

                    <div className="grid grid-cols-2">
                        <div className="m-7 block max-w-sm p-6 bg-white hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Skilled Veterans</h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                Our team boasts years of experience across digital platforms, managing everything from
                                SEO to comprehensive web development.
                            </p>
                        </div>
                        <div className=" m-7 block max-w-sm p-6 bg-white hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Visionary Creatives</h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                We are at the forefront of innovation, continuously adopting new technologies and
                                strategies to exceed your expectations.
                            </p>
                        </div>
                        <div className=" m-7 block max-w-sm p-6 bg-white hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Driven Professionals</h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                Our passion for digital excellence drives us to achieve the highest standards in every
                                project.
                            </p>
                        </div>
                        <div className="m-7 block max-w-sm p-6 bg-white hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Team Collaboration</h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                We work closely with our clients, ensuring a shared vision is flawlessly executed with
                                open communication and teamwork.
                            </p>
                        </div>

                    </div>



                </div>
            </section>

            <section className=" text-center flex flex-col">
                <div className="flex justify-around">
                    <h1 className="font-semibold mt-12 not-italic text-3xl">
                        <span className="text-title-left">Why</span>
                        <span className="text-title-right"> Us</span>
                    </h1>

                    <div className="grid grid-cols-2">
                        <div className="m-7 block max-w-sm p-6 bg-white hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Proven Results</h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                Our portfolio reflects our commitment to success, showcasing projects that have elevated
                                businesses in the digital realm.
                            </p>
                        </div>
                        <div className=" m-7 block max-w-sm p-6 bg-white hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Comprehensive Capabilities</h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                We provide a full spectrum of digital services, ensuring your needs are met all
                                in one place.
                            </p>
                        </div>
                        <div className=" m-7 block max-w-sm p-6 bg-white hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Focused on You</h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                Your goals are our goals. We are dedicated to propelling your success.
                            </p>
                        </div>
                        <div className="m-7 block max-w-sm p-6 bg-white hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Advanced Solutions</h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                We use the latest tools and approaches to keep your business at the cutting edge
                            </p>
                        </div>

                    </div>



                </div>
            </section>

        </>


    );
}

export default About;