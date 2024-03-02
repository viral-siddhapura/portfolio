// import Link from "next/link";

// export default function Footer() {
//     return (
//         <footer className="flex flex-col space-y-10 justify-center m-10">
//         <p className="text-normal text-white sm:text-center">&copy; 2024 Viral Siddhapura. All rights reservered.</p>
//             <nav className="flex justify-center flex-wrap gap-6 text-white font-medium">
//                 <a className="footer_text" href="#">About</a>
//                 <a className="footer_text" href="#">Experience</a>
//                 <a className="footer_text" href="#">Projects</a>
//                 <a className="footer_text" href="#">Education</a>
//                 <a className="footer_text" href="#">Contact</a>
//             </nav>
//         </footer>
//     )
// }

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="flex flex-col sm:flex-col items-center justify-center space-y-10 sm:space-y-10 sm:space-x-10 m-10">
            <p className="text-normal text-white sm:text-center">&copy; 2024 Viral Siddhapura. All rights reserved.</p>
            <nav className="flex justify-center flex-wrap gap-6 text-white font-medium">
                <Link href="#" className="footer_text">About</Link>
                <Link href={'/experience'} className="footer_text">Experience</Link>
                <Link href={'/projects'} className="footer_text">Projects</Link>
                <Link href={'/education'} className="footer_text">Education</Link>
                <Link href={'/contact'} className="footer_text">Contact</Link>
            </nav>
        </footer>
    )
}
