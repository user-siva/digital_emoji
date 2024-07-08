import Image from "next/image";
function Header() {
    return (
        <header className="flex justify-between items-center p-4">
            <div class="ml-4">
                <Image src="" width={150} alt="Digital Emoji Creations" />
            </div>
            <nav className="mr-6">
                <ul className="flex list-none">
                    <li className="ml-3"><a href="#" className="no-underline text-nav-text hover:underline">Service</a></li>
                    <li className="ml-3"><a href="#" className="no-underline text-nav-text hover:underline">Projects</a></li>
                    <li className="ml-3"><a href="#" className="no-underline text-nav-text hover:underline">Brand Story</a></li>
                    <li className="ml-3"><a href="#" className="no-underline text-nav-text hover:underline">Services</a></li>
                    <li className="ml-3"><a href="#" className="no-underline text-nav-text hover:underline">Let's Talk</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;