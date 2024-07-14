import Image from "next/image";

function Hero() {
    return (
        <div className="p-10 text-center flex flex-col" id='hero'>
            <section className="text-center p-2">
                <h1 className="font-bold mb-1 not-italic text-5xl">
                    <span className="text-title-left">Navigating Digital Challenges</span>
                    <span className="text-title-right"> with Our Creativity</span>
                </h1>
                <div className="flex justify-center gap-10 mt-2">
                    <div><b>100+</b> <br /> Happy Clients</div>
                    <div><b>90+</b> <br /> Projects Done</div>
                    <div><b>30+</b> <br /> Global Awards</div>
                </div>
            </section>

            <section>
                <figure className="flex flex-col items-center p-5">
                    <Image src="/main.png" height={1400} width={1200} className="m-5" alt="Digital Marketing" />
                    <figcaption className="max-w-screen-lg">
                        <b>Digital Emoji Creation PVT/LTD</b> is full of bubbling ideas to sizzle your marketing
                        communication. We are
                        that digital agency which adds a glint to your business. Logo revamping, designing to marketing kit
                        designing, website developing to 3D animation; you name it, we do it.
                    </figcaption>
                </figure>
            </section>


        </div>
    );
}

export default Hero;
