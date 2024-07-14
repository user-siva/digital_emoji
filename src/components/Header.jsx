// components/Header.jsx
import Image from 'next/image';

const Header = () => {
    return (
        <header className="flex justify-between items-center p-4">
            <div className="ml-4">
                <Image
                    src="/logo.png"
                    width={150}
                    height={150}
                    color="black"
                    style={{ filter: 'none' }}
                    alt="Digital Emoji Creations"
                />
            </div>
            <nav className="mr-6">
                <ul className="flex list-none">
                    <li className="ml-3">
                        <a href="#hero" className="no-underline text-nav-text hover:underline">Home</a>
                    </li>
                    <li className="ml-3">
                        <a href="#" className="no-underline text-nav-text hover:underline">Projects</a>
                    </li>
                    <li className="ml-3">
                        <a href="#about" className="no-underline text-nav-text hover:underline">About</a>
                    </li>
                    <li className="ml-3">
                        <a href="#services" className="no-underline text-nav-text hover:underline">Services</a>
                    </li>
                    <li className="ml-3">
                        <a href="#contact" className="no-underline text-nav-text hover:underline">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
