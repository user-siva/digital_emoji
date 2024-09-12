"use client";
import React from "react";
import { Slide, Fade } from "react-awesome-reveal";

const serviceCategories = [
    {
        id: 1,
        title: "Pixel Perfect Promotions ",
        subtitle: "Digital Marketing",
        img: '/main.png',
        services: [
            "Influence Infusion - Social Media Marketing",
            "Clicks & Conversions - Search Engine Optimization (SEO)",
            "AdVantage Point - Pay-Per-Click (PPC) Campaigns",
            "Content Catalysts - Content Marketing",
            "Email Elevation - Email Marketing"
        ]
    },
    {
        id: 2,
        title: "LeadCrafters",
        subtitle: "Online Lead Generation",
        img: '/main.png',
        services: [
            "SEO Seekers - SEO-driven Lead Generation",
            "PPC Pioneers - Lead Generation through PPC",
            "Content Conversion Masters - Content-based Lead Strategies"
        ]
    },
    {
        id: 3,
        title: "Brand Beacon",
        subtitle: "Branding",
        img: '/main.png',
        services: [
            "Identity Innovators - Brand Identity Development",
            "Theme Thinkers - Consistent Thematic Campaigns",
            "Visionary Voice - Brand Messaging and Positioning"
        ]
    },
    {
        id: 4,
        title: "Logo Luminaries",
        subtitle: "Logo Designs",
        img: '/main.png',
        services: [
            "Iconic Imaginations - Iconic Logos",
            "Typographic Tailors - Typographic Logo Design",
            "Symbolic Synthesis - Symbolic and Abstract Logos"
        ]
    },
    {
        id: 5,
        title: "Visual Voices",
        subtitle: "Video Promotion",
        img: '/main.png',
        services: [
            "Campaign Captivators - Promotional Video Campaigns",
            "Engagement Enhancers - Social Media Videos",
            "Educational Explainers - Explainer Videos"
        ]
    },
    {
        id: 6,
        title: "AdFilm Artistry",
        subtitle: "Advertisement (Ad Film)",
        img: '/main.png',
        services: [
            "Commercial Creators - Commercial Production",
            "Impact Innovators - Short, Impactful Video Ads"
        ]
    },
    {
        id: 7,
        title: "Snapshot Specialists",
        subtitle: "Professional Photoshoot",
        img: '/main.png',
        services: [
            "Product ProShooters - Product Photography",
            "Corporate Capturers - Corporate Photoshoots",
            "Fashion Frames - Fashion Photography"
        ]
    },
    {
        id: 8,
        title: "Storyboard Studios",
        subtitle: "Short Film Making",
        img: '/main.png',
        services: [
            "Narrative Navigators - Story-driven Short Films",
            "Commercial Cinematics - Commercially-focused Films"
        ]
    },
    {
        id: 9,
        title: "WebSeries Workshop",
        subtitle: "Webseries Making",
        img: '/main.png',
        services: [
            "Episodic Engineers - Scripted Series Production",
            "Reality Renders - Non-Scripted Series Production"
        ]
    },
    {
        id: 10,
        title: "Film Forge",
        subtitle: "Short Film Production",
        img: '/main.png',
        services: [
            "Creative Cinemakers - From Concept to Completion"
        ]
    },
    {
        id: 11,
        title: "Social Snippets Studio",
        subtitle: "Insta and YouTube Short Video Editing",
        img: '/main.png',
        services: [
            "InstaCuts - Instagram Video Edits",
            "Tube Tune - YouTube Video Edits"
        ]
    },
    {
        id: 12,
        title: "Animate AdSpace ",
        subtitle: "2D and 3D Animation Advertisement",
        img: '/main.png',
        services: [
            "Dimensional Designers - 3D Animation",
            "Canvas Creators - 2D Animation"
        ]
    }
];

const Services = () => {
    return (
        <div className="container mx-auto px-4 py-16 min-h-screen flex flex-col justify-center items-center bg-gray-100">
            {/* Heading */}
            <h1 className="text-center font-extrabold text-4xl mb-16">
                <span className="text-[#263B7E]">Our</span>{" "}
                <span className="text-[#5C1F5B]">Services</span>
            </h1>

            {/* Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full px-6">
                {serviceCategories.map(({ id, title, img, subtitle, services }) => {
                    return (
                        <div
                            key={id}
                            className="bg-white shadow-lg rounded-lg overflow-hidden group transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                        >
                            {/* Card Content */}
                            <div className="p-8">
                                {/* Image */}
                                <img
                                    className="rounded-lg h-40 w-full object-cover mb-5"
                                    src={img}
                                    alt={title}
                                />

                                {/* Title and Subtitle */}
                                <h5 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#263B7E]">
                                    {title}
                                </h5>
                                <h6 className="font-semibold text-[#5C1F5B] mb-4">
                                    {subtitle}
                                </h6>

                                {/* Services List */}
                                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                    {services.map((service, index) => (
                                        <li key={index}>{service}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};


export default Services;
