"use client"
import Image from "next/image";
import { useState } from "react";
import TestimonialSlider from "./Testimonial";
import Strategies from "./Strategies";

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
            <section>
            <div className="flex justify-center mt-8">
                <button className="px-4 py-2 w-fit rounded hover:bg-[#5C1F5B]">
                    <h1 className="font-bold mb-1 not-italic text-5xl">
                        <span style={{ color: '#263B7E' }}>Talk to</span>
                        <span style={{ color: '#5C1F5B' }}> our Architect</span>
                    </h1>
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
            </section>
            <TestimonialSlider/>
            <Strategies/>
        </div>
    );
}

export default Hero;
