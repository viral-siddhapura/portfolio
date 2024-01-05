import Link from "next/link";

export default function Footer() {
    return (
        <footer>
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-normal text-white sm:text-center">© 2024 <Link href="#">Viral Siddhapura</Link>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-normal font-medium text-white sm:mt-0">
                    <li>
                        <Link href="#" className="footer_text">About</Link>
                    </li>
                    <li>
                        <Link href="#" className="footer_text">Experience</Link>
                    </li>
                    <li>
                        <Link href="#" className="footer_text">Projects</Link>
                    </li>
                    <li>
                        <Link href="#" className="footer_text">Education</Link>
                    </li>
                    <li>
                        <Link href="#" className="footer_text">Contact</Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}
