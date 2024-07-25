"use client"
import Image from "next/image";
import { useState } from "react";

function ImageFrame({ src, index, hovered, setHovered }) {
    return (
        <div
            key={index}
            className="relative group overflow-hidden w-72 h-72 rounded-full bg-black flex items-center justify-center"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
        >
            <Image
                src={src}
                height={288}  // Adjusted to match the 72x72 size (in pixels)
                width={288}   // Adjusted to match the 72x72 size (in pixels)
                alt={`Image ${index + 1}`}
                className={`transition-transform duration-500 rounded-full ${hovered === index ? 'transform translate-y-full' : ''}`}
            />
            <button
                className={`absolute bg-blue-500 text-white px-4 py-2 rounded opacity-0 transition-opacity duration-500 ${hovered === index ? 'opacity-100' : ''}`}
            >
                Learn More
            </button>
        </div>
    );
}

function Hero() {
    const [hovered, setHovered] = useState(null);

    return (
        <div className="p-10 text-center flex flex-col" id='hero'>
            <section className="text-center p-2">
                <h1 className="font-bold mb-1 not-italic text-5xl">
                    <span style={{ color: '#263B7E' }}>Navigating Digital Challenges</span>
                    <span style={{ color: '#5C1F5B' }}> with Our Creativity</span>
                </h1>
                <div className="flex justify-center gap-10 mt-2">
                    <div><b>100+</b> <br /> Happy Clients</div>
                    <div><b>90+</b> <br /> Projects Done</div>
                    <div><b>30+</b> <br /> Global Awards</div>
                </div>
            </section>
            <div className="flex justify-center mt-8">
                <button className="px-4 py-2 w-fit bg-blue-500 font-bold text-white rounded hover:bg-blue-700">
                    Talk To Our Architect
                </button>
            </div>

            <div className="flex flex-row justify-center gap-5 mt-10">
                {["/images/dev.png", "/images/dev.png", "/images/dev.png", "/images/dev.png"].map((src, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <ImageFrame src={src} index={index} hovered={hovered} setHovered={setHovered} />
                        <p className="mt-2 font-bold">IT Leader</p>
                    </div>
                ))}
            </div>
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
            <h1 className="font-bold mb-1 not-italic text-5xl mb-16 mt-16">
                    Testimonials
            </h1>
            <section className="bg-white dark:bg-gray-900 rounded">
                
                <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                    <figure className="max-w-screen-md mx-auto">
                        <svg className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
                        </svg>
                        <blockquote>
                            <p className="text-2xl font-medium text-gray-900 dark:text-white">"Digital Emoji creation is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
                        </blockquote>
                        <figcaption className="flex items-center justify-center mt-6 space-x-3">
                            <Image className="w-6 h-6 rounded-full" src="/photo1.jpeg" alt="profile picture" width={24} height={24} />
                            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                <div className="pr-3 font-medium text-gray-900 dark:text-white">Micheal Gough</div>
                                <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO at Google</div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </section>
            
        </div>
    );
}

export default Hero;
