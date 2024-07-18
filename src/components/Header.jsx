// components/Header.jsx
import Image from 'next/image';
import Link from 'next/link';

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
                        <Link href="/" className="no-underline text-nav-text hover:underline">Home</Link>
                    </li>
                    <li className="ml-3">
                        <Link href="/project" className="no-underline text-nav-text hover:underline">Projects</Link>
                    </li>
                    <li className="ml-3">
                        <Link href="about" className="no-underline text-nav-text hover:underline">About</Link>
                    </li>
                    <li className="ml-3">
                        <Link href="services" className="no-underline text-nav-text hover:underline">Services</Link>
                    </li>
                    <li className="ml-3">
                        <Link href="contact" className="no-underline text-nav-text hover:underline">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
